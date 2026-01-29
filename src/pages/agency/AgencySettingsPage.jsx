import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Settings, 
  Clock,
  Save,
  Building2
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import Input, { Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import toast from 'react-hot-toast';

const settingsSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  address: z.string().min(5, 'Address is required'),
  phone: z.string().min(10, 'Valid phone required'),
  breakfastCutoff: z.string().optional(),
  lunchCutoff: z.string().optional(),
  dinnerCutoff: z.string().optional(),
  snacksCutoff: z.string().optional()
});

export default function AgencySettingsPage() {
  const { userData } = useAuth();

  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: userData?.agencyName || '',
      address: userData?.agencyAddress || '',
      phone: userData?.phone || '',
      breakfastCutoff: '08:00',
      lunchCutoff: '11:00',
      dinnerCutoff: '18:00',
      snacksCutoff: '15:00'
    }
  });

  const onSubmit = (data) => {
    console.log('Settings:', data);
    toast.success('Settings saved successfully!');
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Agency Settings</h1>
          <p className="text-secondary-600 mt-1">
            Manage your agency profile and preferences
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Agency Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Agency Information
              </CardTitle>
              <CardDescription>
                Basic information about your food agency
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Agency Name"
                placeholder="Enter agency name"
                error={errors.name?.message}
                {...register('name')}
              />

              <Textarea
                label="Address"
                placeholder="Enter complete address"
                error={errors.address?.message}
                {...register('address')}
              />

              <Input
                label="Contact Phone"
                placeholder="+91 XXXXX XXXXX"
                error={errors.phone?.message}
                {...register('phone')}
              />
            </CardContent>
          </Card>

          {/* Cutoff Times */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Order Cutoff Times
              </CardTitle>
              <CardDescription>
                Set the latest time customers can place orders for each meal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Breakfast Cutoff"
                  type="time"
                  error={errors.breakfastCutoff?.message}
                  {...register('breakfastCutoff')}
                />

                <Input
                  label="Lunch Cutoff"
                  type="time"
                  error={errors.lunchCutoff?.message}
                  {...register('lunchCutoff')}
                />

                <Input
                  label="Snacks Cutoff"
                  type="time"
                  error={errors.snacksCutoff?.message}
                  {...register('snacksCutoff')}
                />

                <Input
                  label="Dinner Cutoff"
                  type="time"
                  error={errors.dinnerCutoff?.message}
                  {...register('dinnerCutoff')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={!isDirty}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
