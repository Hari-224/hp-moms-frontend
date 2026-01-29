import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Building2, 
  Plus, 
  Search,
  Edit,
  Trash2,
  Users,
  Phone,
  MapPin,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { adminApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import Input, { Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import toast from 'react-hot-toast';

const agencySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  ownerName: z.string().min(2, 'Owner name is required'),
  ownerPhone: z.string().min(10, 'Valid phone required'),
  address: z.string().min(5, 'Address is required')
});

export default function AdminAgenciesPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editAgency, setEditAgency] = useState(null);
  const [deleteAgency, setDeleteAgency] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(agencySchema)
  });

  // Fetch all agencies
  const { data: agenciesData, isLoading } = useQuery({
    queryKey: ['adminAgencies'],
    queryFn: () => adminApi.getAllAgencies()
  });

  // Create agency mutation
  const createMutation = useMutation({
    mutationFn: (data) => adminApi.createAgency(data),
    onSuccess: () => {
      toast.success('Agency created successfully!');
      setShowCreateModal(false);
      reset();
      queryClient.invalidateQueries(['adminAgencies']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create agency');
    }
  });

  // Update agency mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => adminApi.updateAgency(id, data),
    onSuccess: () => {
      toast.success('Agency updated!');
      setEditAgency(null);
      reset();
      queryClient.invalidateQueries(['adminAgencies']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update agency');
    }
  });

  // Toggle agency status mutation
  const toggleStatusMutation = useMutation({
    mutationFn: ({ id, status }) => adminApi.updateAgencyStatus(id, status),
    onSuccess: () => {
      toast.success('Agency status updated!');
      queryClient.invalidateQueries(['adminAgencies']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update status');
    }
  });

  // Delete agency mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => adminApi.deleteAgency(id),
    onSuccess: () => {
      toast.success('Agency deleted');
      setDeleteAgency(null);
      queryClient.invalidateQueries(['adminAgencies']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete agency');
    }
  });

  const agencies = agenciesData?.data?.agencies || [];

  // Filter agencies
  const filteredAgencies = agencies.filter(agency =>
    agency.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agency.ownerName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Summary
  const summary = {
    total: agencies.length,
    active: agencies.filter(a => a.status === 'active').length,
    houses: agencies.reduce((sum, a) => sum + (a.housesCount || 0), 0),
    members: agencies.reduce((sum, a) => sum + (a.membersCount || 0), 0)
  };

  const onSubmit = (data) => {
    if (editAgency) {
      updateMutation.mutate({ id: editAgency.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const openEdit = (agency) => {
    setEditAgency(agency);
    reset({
      name: agency.name,
      ownerName: agency.ownerName,
      ownerPhone: agency.ownerPhone,
      address: agency.address
    });
  };

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
            <h1 className="text-2xl font-bold text-secondary-900">Food Agencies</h1>
            <p className="text-secondary-600 mt-1">
              Manage all food agencies in the system
            </p>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Agency
          </Button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Agencies</p>
              <p className="text-2xl font-bold text-secondary-900">{summary.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Active</p>
              <p className="text-2xl font-bold text-success-600">{summary.active}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Houses</p>
              <p className="text-2xl font-bold text-primary-600">{summary.houses}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Members</p>
              <p className="text-2xl font-bold text-primary-600">{summary.members}</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <Input
              placeholder="Search agencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<Search className="h-5 w-5" />}
            />
          </CardContent>
        </Card>

        {/* Agencies list */}
        {filteredAgencies.length === 0 ? (
          <EmptyState
            icon={Building2}
            title="No Agencies Found"
            description={searchTerm 
              ? "No agencies match your search" 
              : "Add food agencies to get started"
            }
            action={!searchTerm && (
              <Button onClick={() => setShowCreateModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Agency
              </Button>
            )}
          />
        ) : (
          <div className="space-y-4">
            {filteredAgencies.map((agency) => (
              <Card key={agency.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900 text-lg">
                          {agency.name}
                        </h3>
                        <p className="text-sm text-secondary-600">
                          Owner: {agency.ownerName}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-secondary-500">
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {agency.ownerPhone}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {agency.address?.substring(0, 30)}...
                          </span>
                        </div>
                        <div className="flex gap-4 mt-2">
                          <Badge variant="secondary" size="sm">
                            <Users className="h-3 w-3 mr-1" />
                            {agency.housesCount || 0} Houses
                          </Badge>
                          <Badge variant="secondary" size="sm">
                            <Users className="h-3 w-3 mr-1" />
                            {agency.membersCount || 0} Members
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <StatusBadge status={agency.status || 'active'} />
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStatusMutation.mutate({
                          id: agency.id,
                          status: agency.status === 'active' ? 'inactive' : 'active'
                        })}
                      >
                        {agency.status === 'active' ? (
                          <ToggleRight className="h-6 w-6 text-success-600" />
                        ) : (
                          <ToggleLeft className="h-6 w-6 text-secondary-400" />
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEdit(agency)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="text-danger-600 hover:bg-danger-50"
                        onClick={() => setDeleteAgency(agency)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      <Modal
        isOpen={showCreateModal || !!editAgency}
        onClose={() => {
          setShowCreateModal(false);
          setEditAgency(null);
          reset();
        }}
        title={editAgency ? 'Edit Agency' : 'Add Agency'}
        size="md"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Agency Name"
            placeholder="Enter agency name"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Owner Name"
            placeholder="Enter owner's name"
            error={errors.ownerName?.message}
            {...register('ownerName')}
          />

          <Input
            label="Owner Phone"
            placeholder="+91 XXXXX XXXXX"
            error={errors.ownerPhone?.message}
            {...register('ownerPhone')}
          />

          <Textarea
            label="Address"
            placeholder="Enter complete address"
            error={errors.address?.message}
            {...register('address')}
          />

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setShowCreateModal(false);
                setEditAgency(null);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              isLoading={createMutation.isPending || updateMutation.isPending}
            >
              {editAgency ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={!!deleteAgency}
        onClose={() => setDeleteAgency(null)}
        onConfirm={() => deleteMutation.mutate(deleteAgency?.id)}
        title="Delete Agency"
        message={`Are you sure you want to delete "${deleteAgency?.name}"? This will also delete all associated houses, members, orders, and bills.`}
        confirmText="Delete"
        variant="danger"
        isLoading={deleteMutation.isPending}
      />
    </Layout>
  );
}
