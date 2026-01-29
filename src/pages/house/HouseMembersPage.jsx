import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Users, 
  Plus, 
  Phone,
  UserMinus,
  Shield,
  Search
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { houseApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Avatar } from '../../components/ui/Avatar';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import toast from 'react-hot-toast';

const memberSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone required')
});

export default function HouseMembersPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [showAddModal, setShowAddModal] = useState(false);
  const [removeMember, setRemoveMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const houseId = userData?.houseId;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(memberSchema)
  });

  // Fetch members
  const { data: membersData, isLoading } = useQuery({
    queryKey: ['houseMembers', houseId],
    queryFn: () => houseApi.getMembers(houseId),
    enabled: !!houseId
  });

  // Add member mutation
  const addMutation = useMutation({
    mutationFn: (data) => houseApi.addMember(houseId, data),
    onSuccess: () => {
      toast.success('Member added successfully!');
      setShowAddModal(false);
      reset();
      queryClient.invalidateQueries(['houseMembers']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to add member');
    }
  });

  // Remove member mutation
  const removeMutation = useMutation({
    mutationFn: (userId) => houseApi.removeMember(houseId, userId),
    onSuccess: () => {
      toast.success('Member removed');
      setRemoveMember(null);
      queryClient.invalidateQueries(['houseMembers']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to remove member');
    }
  });

  const members = membersData?.data?.members || [];

  // Filter members
  const filteredMembers = members.filter(member =>
    member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone?.includes(searchTerm)
  );

  const onSubmit = (data) => {
    addMutation.mutate(data);
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
            <h1 className="text-2xl font-bold text-secondary-900">House Members</h1>
            <p className="text-secondary-600 mt-1">
              Manage members in your house
            </p>
          </div>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <Input
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<Search className="h-5 w-5" />}
            />
          </CardContent>
        </Card>

        {/* Members list */}
        {filteredMembers.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No Members Found"
            description={searchTerm 
              ? "No members match your search" 
              : "Add members to your house to start ordering food together"
            }
            action={!searchTerm && (
              <Button onClick={() => setShowAddModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            )}
          />
        ) : (
          <div className="space-y-3">
            {filteredMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar name={member.name} size="lg" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-secondary-900">
                            {member.name}
                          </h3>
                          {member.isAdmin && (
                            <Badge variant="primary" size="sm">
                              <Shield className="h-3 w-3 mr-1" />
                              Admin
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-secondary-500">
                          <Phone className="h-4 w-4" />
                          {member.phone}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <StatusBadge status={member.status || 'active'} />
                      {!member.isAdmin && member.id !== userData?.id && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-danger-600 hover:bg-danger-50"
                          onClick={() => setRemoveMember(member)}
                        >
                          <UserMinus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Add Member Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          reset();
        }}
        title="Add Member"
        size="sm"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Name"
            placeholder="Enter member's name"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Phone Number"
            placeholder="+91 XXXXX XXXXX"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setShowAddModal(false);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              isLoading={addMutation.isPending}
            >
              Add Member
            </Button>
          </div>
        </form>
      </Modal>

      {/* Remove Confirmation */}
      <ConfirmModal
        isOpen={!!removeMember}
        onClose={() => setRemoveMember(null)}
        onConfirm={() => removeMutation.mutate(removeMember?.id)}
        title="Remove Member"
        message={`Are you sure you want to remove ${removeMember?.name} from the house?`}
        confirmText="Remove"
        variant="danger"
        isLoading={removeMutation.isPending}
      />
    </Layout>
  );
}
