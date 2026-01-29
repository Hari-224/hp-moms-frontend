import { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp, collection, query, where, getDocs } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { auth, db, functions } from '../config/firebase';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

// Helper to convert phone to email format for Firebase Auth
// Firebase Auth requires email format, so we use phone@moms.app
const phoneToEmail = (phone) => {
  const cleaned = phone.replace(/[^0-9]/g, '');
  return `${cleaned}@moms.app`;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUnsubscribe, setUserUnsubscribe] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // Clean up previous user listener
      if (userUnsubscribe) {
        userUnsubscribe();
        setUserUnsubscribe(null);
      }
      
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // Listen to user data changes
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const unsubscribeUser = onSnapshot(userDocRef, async (userDoc) => {
          if (userDoc.exists()) {
            let data = { id: userDoc.id, ...userDoc.data() };
            
            // If agency owner without agencyId, look up agency by ownerId
            if (data.role === 'agency_owner' && !data.agencyId) {
              try {
                const agencyQuery = query(
                  collection(db, 'agencies'),
                  where('ownerId', '==', firebaseUser.uid)
                );
                const agencySnap = await getDocs(agencyQuery);
                if (!agencySnap.empty) {
                  data.agencyId = agencySnap.docs[0].id;
                  // Also update the user document to cache it
                  await updateDoc(userDocRef, { agencyId: data.agencyId });
                }
              } catch (err) {
                console.error('Error looking up agency:', err);
              }
            }
            
            setUserData(data);
          } else {
            setUserData(null);
          }
          setLoading(false);
        }, (error) => {
          // Ignore permission errors during logout
          if (error.code !== 'permission-denied') {
            console.error('Error fetching user data:', error);
          }
          setUserData(null);
          setLoading(false);
        });

        setUserUnsubscribe(() => unsubscribeUser);
      } else {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
      if (userUnsubscribe) {
        userUnsubscribe();
      }
    };
  }, []);

  // Login with phone and password
  const login = async (phone, password) => {
    try {
      const email = phoneToEmail(phone);
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if user document exists, if not create it (handles orphaned auth users)
      const userDocRef = doc(db, 'users', result.user.uid);
      const userDocSnap = await getDoc(userDocRef);
      
      if (!userDocSnap.exists()) {
        // Auth user exists but Firestore doc was deleted - recreate it
        const normalizedPhone = phone.replace(/[^0-9]/g, '');
        const userDocData = {
          id: result.user.uid,
          phone: normalizedPhone,
          name: 'User',
          role: 'customer',
          status: 'active',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };
        await setDoc(userDocRef, userDocData);
      }
      
      toast.success('Login successful!');
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Login error:', error);
      
      let message = 'Login failed';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        message = 'Invalid phone number or password';
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Too many failed attempts. Please try again later.';
      }
      
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Register new user with phone and password
  const register = async (phone, password, name) => {
    try {
      const email = phoneToEmail(phone);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Normalize phone number (remove non-digits)
      const normalizedPhone = phone.replace(/[^0-9]/g, '');
      
      // Check if this phone is in any house
      let houseId = null;
      let smallHouseId = null;
      let agencyId = null;
      let role = 'customer';
      
      try {
        // First, try to find by memberPhones array
        let housesQuery = query(
          collection(db, 'houses'),
          where('memberPhones', 'array-contains', normalizedPhone)
        );
        let housesSnap = await getDocs(housesQuery);
        
        // If not found in memberPhones, check houseAdminPhone field
        if (housesSnap.empty) {
          housesQuery = query(
            collection(db, 'houses'),
            where('houseAdminPhone', '==', normalizedPhone)
          );
          housesSnap = await getDocs(housesQuery);
        }
        
        if (!housesSnap.empty) {
          const houseDoc = housesSnap.docs[0];
          const houseData = houseDoc.data();
          houseId = houseDoc.id;
          smallHouseId = houseData.smallHouseId;
          agencyId = houseData.agencyId;
          
          // Check if this user is the house admin
          if (houseData.houseAdminPhone === normalizedPhone) {
            role = 'house_admin';
          }
        }
      } catch (err) {
        console.error('Error checking house membership:', err);
      }
      
      // Create user document in Firestore
      const userDocData = {
        id: result.user.uid,
        phone: normalizedPhone,
        name: name,
        role: role,
        status: 'active',
        ...(houseId && { houseId }),
        ...(smallHouseId && { smallHouseId }),
        ...(agencyId && { agencyId }),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      await setDoc(doc(db, 'users', result.user.uid), userDocData);
      setUserData(userDocData);
      
      if (houseId) {
        toast.success(`Registration successful! You've been linked to your house.`);
      } else {
        toast.success('Registration successful!');
      }
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Register error:', error);
      
      let message = 'Registration failed';
      if (error.code === 'auth/email-already-in-use') {
        message = 'This phone number is already registered';
      } else if (error.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters';
      }
      
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      // Unsubscribe from user listener first to avoid permission errors
      if (userUnsubscribe) {
        userUnsubscribe();
        setUserUnsubscribe(null);
      }
      setUser(null);
      setUserData(null);
      await firebaseSignOut(auth);
      toast.success('Signed out successfully');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Failed to sign out');
    }
  };

  // Update profile
  const updateProfile = async (data) => {
    if (!user) {
      toast.error('User not authenticated');
      return { success: false };
    }

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        ...data,
        updatedAt: serverTimestamp()
      });
      
      setUserData(prev => ({ ...prev, ...data }));
      toast.success('Profile updated successfully');
      return { success: true };
    } catch (error) {
      console.error('Update profile error:', error);
      toast.error(error.message || 'Failed to update profile');
      return { success: false, error: error.message };
    }
  };

  // Refresh user data
  const refreshUserData = async () => {
    if (!user) return;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserData({ id: userDoc.id, ...userDoc.data() });
      }
    } catch (error) {
      console.error('Error refreshing user data:', error);
    }
  };

  const value = {
    user,
    userData,
    loading,
    isAuthenticated: !!user,
    isRegistered: !!userData,
    login,
    register,
    signOut,
    updateProfile,
    refreshUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
