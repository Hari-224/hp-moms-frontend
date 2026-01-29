import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChefHat, Phone, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const loginSchema = z.object({
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[0-9+\s-]+$/, 'Invalid phone number format'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isRegistered } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { 
      phone: '',
      password: ''
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
    const result = await login(data.phone, data.password);
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
          <h1 className="text-2xl font-bold text-secondary-900">Welcome to MOMS</h1>
          <p className="text-secondary-600 mt-1">Meal Order Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-secondary-900 mb-2">
            Sign In
          </h2>
          <p className="text-secondary-600 text-sm mb-6">
            Enter your phone number and password to continue
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              placeholder="Enter your password"
              leftIcon={<Lock className="h-5 w-5" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <Button 
              type="submit" 
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Sign In
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-secondary-600 text-sm">
              Don't have an account?{' '}
              <Link 
                to={ROUTES.REGISTER}
                className="text-primary-600 font-medium hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-secondary-500 mt-6">
          By continuing, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
