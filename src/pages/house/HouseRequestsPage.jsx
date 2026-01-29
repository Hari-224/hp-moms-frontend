import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  ClipboardList, 
  Check,
  X,
  Clock,
  User,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { orderApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Input, { Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate, formatDateTime } from '../../utils/helpers';
import { MEAL_TYPE_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function HouseRequestsPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [rejectRequest, setRejectRequest] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  const houseId = userData?.houseId;

  // Fetch manual consumption requests
  const { data: requestsData, isLoading } = useQuery({
    queryKey: ['houseRequests', houseId],
    queryFn: () => orderApi.getManualRequests(houseId),
    enabled: !!houseId
  });

  // Approve request mutation
  const approveMutation = useMutation({
    mutationFn: (requestId) => orderApi.approveManualRequest(requestId),
    onSuccess: () => {
      toast.success('Request approved!');
      setSelectedRequest(null);
      queryClient.invalidateQueries(['houseRequests']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to approve request');
    }
  });

  // Reject request mutation
  const rejectMutation = useMutation({
    mutationFn: ({ requestId, reason }) => orderApi.rejectManualRequest(requestId, reason),
    onSuccess: () => {
      toast.success('Request rejected');
      setRejectRequest(null);
      setRejectReason('');
      queryClient.invalidateQueries(['houseRequests']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to reject request');
    }
  });

  const requests = requestsData?.data?.requests || [];

  // Filter by pending
  const pendingRequests = requests.filter(r => r.status === 'pending');
  const otherRequests = requests.filter(r => r.status !== 'pending');

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
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Manual Requests</h1>
          <p className="text-secondary-600 mt-1">
            Approve or reject manual consumption requests from members
          </p>
        </div>

        {/* Pending Count */}
        {pendingRequests.length > 0 && (
          <Card className="bg-warning-50 border-warning-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning-100 rounded-lg">
                  <Clock className="h-6 w-6 text-warning-600" />
                </div>
                <div>
                  <p className="text-sm text-warning-700">Pending Approval</p>
                  <p className="text-2xl font-bold text-warning-900">
                    {pendingRequests.length} requests
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pending Requests */}
        {pendingRequests.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-secondary-900">
              Pending Requests
            </h2>
            {pendingRequests.map((request) => (
              <Card key={request.id} className="border-warning-200">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-warning-50 rounded-lg">
                        <User className="h-6 w-6 text-warning-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          {request.memberName}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-secondary-500">
                          <Badge variant="secondary" size="sm">
                            {MEAL_TYPE_LABELS[request.mealType]}
                          </Badge>
                          <span>{formatDate(request.date)}</span>
                        </div>
                        {request.notes && (
                          <p className="text-sm text-secondary-600 mt-1">
                            "{request.notes}"
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-lg font-bold text-secondary-900">
                          {formatCurrency(request.totalAmount)}
                        </p>
                        <p className="text-xs text-secondary-500">
                          {formatDateTime(request.createdAt)}
                        </p>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => setRejectRequest(request)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => approveMutation.mutate(request.id)}
                        isLoading={approveMutation.isPending}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Other Requests */}
        {otherRequests.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-secondary-900">
              Past Requests
            </h2>
            {otherRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary-100 rounded-lg">
                        <User className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-secondary-900">
                          {request.memberName}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-secondary-500">
                          <Badge variant="secondary" size="sm">
                            {MEAL_TYPE_LABELS[request.mealType]}
                          </Badge>
                          <span>{formatDate(request.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="font-medium text-secondary-900">
                        {formatCurrency(request.totalAmount)}
                      </p>
                      <StatusBadge status={request.status} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty state */}
        {requests.length === 0 && (
          <EmptyState
            icon={ClipboardList}
            title="No Requests"
            description="Manual consumption requests from members will appear here"
          />
        )}
      </div>

      {/* Reject Modal */}
      <Modal
        isOpen={!!rejectRequest}
        onClose={() => {
          setRejectRequest(null);
          setRejectReason('');
        }}
        title="Reject Request"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-secondary-600">
            Reject request from <span className="font-semibold">{rejectRequest?.memberName}</span>?
          </p>
          <Textarea
            label="Reason (optional)"
            placeholder="Enter reason for rejection..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            rows={3}
          />
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setRejectRequest(null);
                setRejectReason('');
              }}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={() => rejectMutation.mutate({
                requestId: rejectRequest.id,
                reason: rejectReason
              })}
              isLoading={rejectMutation.isPending}
            >
              Reject
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
