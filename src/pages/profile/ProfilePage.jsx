import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  User, 
  Phone,
  Save,
  Bell,
  Shield,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Avatar } from '../../components/ui/Avatar';
import { Badge } from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import { ROLE_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

const profileSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email').optional().or(z.literal(''))
});

export default function ProfilePage() {
  const { user, userData, signOut, updateProfile } = useAuth();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userData?.name || '',
      email: userData?.email || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await updateProfile(data);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar name={userData?.name || 'User'} size="xl" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-secondary-900">
                  {userData?.name || 'User'}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-4 w-4 text-secondary-400" />
                  <span className="text-secondary-600">{userData?.phone || 'N/A'}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="primary">
                    {ROLE_LABELS[userData?.role] || 'Customer'}
                  </Badge>
                  {userData?.agencyName && (
                    <Badge variant="secondary">{userData.agencyName}</Badge>
                  )}
                  {userData?.houseName && (
                    <Badge variant="secondary">{userData.houseName}</Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                error={errors.name?.message}
                {...register('name')}
              />

              <Input
                label="Email (Optional)"
                type="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                {...register('email')}
              />

              <Input
                label="Phone Number"
                value={user?.phoneNumber || ''}
                disabled
                className="bg-secondary-50"
              />

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={!isDirty} isLoading={isLoading}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-secondary-100">
            <button className="w-full flex items-center justify-between py-4 text-left hover:bg-secondary-50 -mx-6 px-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Bell className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Notifications</p>
                  <p className="text-sm text-secondary-500">Manage push notifications</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-secondary-400" />
            </button>

            <button className="w-full flex items-center justify-between py-4 text-left hover:bg-secondary-50 -mx-6 px-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success-50 rounded-lg">
                  <Shield className="h-5 w-5 text-success-600" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Privacy & Security</p>
                  <p className="text-sm text-secondary-500">Account security settings</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-secondary-400" />
            </button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-danger-200">
          <CardContent className="p-4">
            <Button
              variant="outline"
              className="w-full text-danger-600 hover:bg-danger-50 border-danger-200"
              onClick={() => setShowLogoutConfirm(true)}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center text-sm text-secondary-400 pb-8">
          <p>MOMS - Meal Order Management System</p>
          <p>Version 1.0.0</p>
        </div>
      </div>

      {/* Logout Confirmation */}
      <ConfirmModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        variant="danger"
      />
    </Layout>
  );
}
