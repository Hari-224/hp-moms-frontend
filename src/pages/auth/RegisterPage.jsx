import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChefHat, Phone, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const registerSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[0-9+\s-]+$/, 'Invalid phone number format'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerUser, isAuthenticated, isRegistered } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  // If already authenticated and registered, go to dashboard
  useEffect(() => {
    if (isAuthenticated && isRegistered) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [isAuthenticated, isRegistered, navigate]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await registerUser(data.phone, data.password, data.name);
    setIsLoading(false);
    
    if (result.success) {
      navigate(ROUTES.DASHBOARD);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4">
            <ChefHat className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-secondary-900">Join MOMS</h1>
          <p className="text-secondary-600 mt-1">Create your account to get started</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-secondary-900 mb-2">
            Create Account
          </h2>
          <p className="text-secondary-600 text-sm mb-6">
            Register as a customer. Contact admin for agency access.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              leftIcon={<User className="h-5 w-5" />}
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              leftIcon={<Phone className="h-5 w-5" />}
              error={errors.phone?.message}
              {...register('phone')}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password (min 6 chars)"
              leftIcon={<Lock className="h-5 w-5" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              leftIcon={<Lock className="h-5 w-5" />}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />

            <Button 
              type="submit" 
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Create Account
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-secondary-600 text-sm">
              Already have an account?{' '}
              <Link 
                to={ROUTES.LOGIN}
                className="text-primary-600 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-secondary-500 mt-6">
          By registering, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
