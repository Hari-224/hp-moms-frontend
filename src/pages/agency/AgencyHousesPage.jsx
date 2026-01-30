import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Building2, 
  Plus, 
  Users,
  MapPin,
  Phone,
  Edit,
  Trash2,
  Search
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { houseApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import Input, { Textarea, Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatDate } from '../../utils/helpers';
import toast from 'react-hot-toast';

const houseSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  type: z.enum(['BigHouse', 'SmallHouse']),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  adminName: z.string().min(2, 'Admin name is required'),
  adminPhone: z.string().min(10, 'Valid phone number is required')
});

export default function AgencyHousesPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [editingHouse, setEditingHouse] = useState(null);
  const [deleteHouse, setDeleteHouse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const agencyId = userData?.agencyId;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(houseSchema)
  });

  // Fetch houses
  const { data: housesData, isLoading } = useQuery({
    queryKey: ['agencyHouses', agencyId],
    queryFn: async () => {
      const result = await houseApi.list(agencyId);
      return result;
    },
    enabled: !!agencyId
  });

  // Create house mutation
  const createMutation = useMutation({
    mutationFn: (data) => houseApi.create({ ...data, agencyId }),
    onSuccess: () => {
      toast.success('House created successfully!');
      setShowModal(false);
      reset();
      queryClient.invalidateQueries(['agencyHouses']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create house');
    }
  });

  const houses = housesData?.data?.houses || housesData?.houses || [];

  // Filter houses
  const filteredHouses = houses.filter(house => 
    house.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    house.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (data) => {
    createMutation.mutate(data);
  };

  const houseTypeOptions = [
    { value: 'BigHouse', label: 'Big House (Multiple members)' },
    { value: 'SmallHouse', label: 'Small House (Single member)' }
  ];

  if (isLoading) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Houses</h1>
            <p className="text-secondary-600 mt-1">
              Manage houses and their members
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add House
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <Input
              placeholder="Search houses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<Search className="h-5 w-5" />}
            />
          </CardContent>
        </Card>

        {/* Houses list */}
        {filteredHouses.length === 0 ? (
          <EmptyState
            icon={Building2}
            title="No Houses Found"
            description={searchTerm 
              ? "No houses match your search." 
              : "Start by adding your first house to manage meal orders."
            }
            action={!searchTerm && (
              <Button onClick={() => setShowModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add House
              </Button>
            )}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHouses.map((house) => (
              <Card key={house.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-secondary-900">{house.name}</h3>
                      <StatusBadge status={house.status || 'active'} />
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      house.type === 'BigHouse' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-secondary-100 text-secondary-700'
                    }`}>
                      {house.type === 'BigHouse' ? 'Big House' : 'Small House'}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{house.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{house.memberCount || 0} members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{house.houseAdminPhone || house.adminPhone || 'No admin assigned'}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-4 border-t border-secondary-100">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        setEditingHouse(house);
                        setShowModal(true);
                      }}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-danger-600 hover:bg-danger-50"
                      onClick={() => setDeleteHouse(house)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit House Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingHouse(null);
          reset();
        }}
        title={editingHouse ? 'Edit House' : 'Add New House'}
        size="md"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="House Name"
            placeholder="Enter house name"
            error={errors.name?.message}
            defaultValue={editingHouse?.name}
            {...register('name')}
          />

          <Select
            label="House Type"
            options={houseTypeOptions}
            error={errors.type?.message}
            defaultValue={editingHouse?.type}
            {...register('type')}
          />

          <Textarea
            label="Address"
            placeholder="Enter complete address"
            error={errors.address?.message}
            defaultValue={editingHouse?.address}
            {...register('address')}
          />

          <Input
            label="Admin Name"
            placeholder="House admin's name"
            error={errors.adminName?.message}
            defaultValue={editingHouse?.adminName}
            {...register('adminName')}
          />

          <Input
            label="Admin Phone"
            placeholder="+91 XXXXX XXXXX"
            error={errors.adminPhone?.message}
            defaultValue={editingHouse?.adminPhone}
            {...register('adminPhone')}
          />

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="secondary" 
              className="flex-1"
              onClick={() => {
                setShowModal(false);
                setEditingHouse(null);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              isLoading={createMutation.isPending}
            >
              {editingHouse ? 'Update' : 'Create'} House
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={!!deleteHouse}
        onClose={() => setDeleteHouse(null)}
        onConfirm={async () => {
          try {
            const result = await houseApi.delete(deleteHouse.id);
            if (result.success) {
              toast.success(`House deleted! Removed ${result.data.deletedUsersCount} users, ${result.data.deletedOrdersCount} orders, ${result.data.deletedBillsCount} bills`);
              queryClient.invalidateQueries(['houses']);
            } else {
              toast.error(result.error || 'Failed to delete house');
            }
          } catch (error) {
            toast.error('Failed to delete house');
          } finally {
            setDeleteHouse(null);
          }
        }}
        title="Delete House"
        message={`⚠️ Are you sure you want to delete "${deleteHouse?.name}"? This will PERMANENTLY remove:\n\n• All house members (from app & authentication)\n• All orders and bills\n• All related data\n\nThis action CANNOT be undone!`}
        confirmText="Delete Permanently"
        variant="danger"
      />
    </Layout>
  );
}
