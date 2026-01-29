import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  CreditCard, 
  Check,
  X,
  Eye,
  Image,
  Calendar,
  IndianRupee
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { paymentApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import Input, { Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate, formatDateTime } from '../../utils/helpers';
import { PAYMENT_METHOD_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function AgencyPaymentsPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [rejectPayment, setRejectPayment] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [filterStatus, setFilterStatus] = useState('pending');

  const agencyId = userData?.agencyId;

  // Fetch payments
  const { data: paymentsData, isLoading } = useQuery({
    queryKey: ['agencyPayments', agencyId, filterStatus],
    queryFn: () => paymentApi.getAgencyPayments(agencyId, { 
      status: filterStatus || undefined 
    }),
    enabled: !!agencyId
  });

  // Confirm payment mutation
  const confirmMutation = useMutation({
    mutationFn: (paymentId) => paymentApi.confirm(paymentId),
    onSuccess: () => {
      toast.success('Payment confirmed!');
      setSelectedPayment(null);
      queryClient.invalidateQueries(['agencyPayments']);
      queryClient.invalidateQueries(['agencyBills']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to confirm payment');
    }
  });

  // Reject payment mutation
  const rejectMutation = useMutation({
    mutationFn: ({ paymentId, reason }) => paymentApi.reject(paymentId, reason),
    onSuccess: () => {
      toast.success('Payment rejected');
      setRejectPayment(null);
      setRejectReason('');
      queryClient.invalidateQueries(['agencyPayments']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to reject payment');
    }
  });

  const payments = paymentsData?.data?.payments || [];

  // Summary
  const pendingCount = payments.filter(p => p.status === 'pending').length;
  const pendingAmount = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0);

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
          <h1 className="text-2xl font-bold text-secondary-900">Payments</h1>
          <p className="text-secondary-600 mt-1">
            Review and confirm payment submissions
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-warning-50 border-warning-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-warning-600" />
                </div>
                <div>
                  <p className="text-sm text-warning-700">Pending Approvals</p>
                  <p className="text-2xl font-bold text-warning-900">{pendingCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary-50 border-primary-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <IndianRupee className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-primary-700">Pending Amount</p>
                  <p className="text-2xl font-bold text-primary-900">
                    {formatCurrency(pendingAmount)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              {['pending', 'confirmed', 'rejected', ''].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {status === '' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payments list */}
        {payments.length === 0 ? (
          <EmptyState
            icon={CreditCard}
            title="No Payments Found"
            description={filterStatus === 'pending' 
              ? "No pending payments to review" 
              : "No payments match the selected filter"
            }
          />
        ) : (
          <div className="space-y-4">
            {payments.map((payment) => (
              <Card key={payment.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {payment.screenshotUrl ? (
                        <img 
                          src={payment.screenshotUrl} 
                          alt="Payment screenshot"
                          className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                          onClick={() => setSelectedPayment(payment)}
                        />
                      ) : (
                        <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                          <Image className="h-6 w-6 text-secondary-400" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          {payment.houseName}
                        </h3>
                        <p className="text-sm text-secondary-500">
                          {PAYMENT_METHOD_LABELS[payment.method]} • {formatDateTime(payment.createdAt)}
                        </p>
                        {payment.transactionId && (
                          <p className="text-xs text-secondary-400">
                            Ref: {payment.transactionId}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-secondary-900">
                          {formatCurrency(payment.amount)}
                        </p>
                      </div>
                      <StatusBadge status={payment.status} />
                      
                      {payment.status === 'pending' ? (
                        <div className="flex gap-2">
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => setRejectPayment(payment)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="success"
                            size="sm"
                            onClick={() => confirmMutation.mutate(payment.id)}
                            isLoading={confirmMutation.isPending}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedPayment(payment)}
                        >
                          <Eye className="h-4 w-4" />
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

      {/* Payment Details Modal */}
      <Modal
        isOpen={!!selectedPayment}
        onClose={() => setSelectedPayment(null)}
        title="Payment Details"
        size="md"
      >
        {selectedPayment && (
          <div className="space-y-4">
            {/* Screenshot */}
            {selectedPayment.screenshotUrl && (
              <div>
                <p className="text-sm text-secondary-500 mb-2">Payment Screenshot</p>
                <img 
                  src={selectedPayment.screenshotUrl} 
                  alt="Payment screenshot"
                  className="w-full rounded-lg"
                />
              </div>
            )}

            {/* Details */}
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-secondary-100">
                <span className="text-secondary-500">House</span>
                <span className="font-medium">{selectedPayment.houseName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-secondary-100">
                <span className="text-secondary-500">Amount</span>
                <span className="font-bold text-primary-600">
                  {formatCurrency(selectedPayment.amount)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-secondary-100">
                <span className="text-secondary-500">Method</span>
                <span>{PAYMENT_METHOD_LABELS[selectedPayment.method]}</span>
              </div>
              {selectedPayment.transactionId && (
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-500">Transaction ID</span>
                  <span className="font-mono">{selectedPayment.transactionId}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-secondary-100">
                <span className="text-secondary-500">Status</span>
                <StatusBadge status={selectedPayment.status} />
              </div>
              <div className="flex justify-between py-2 border-b border-secondary-100">
                <span className="text-secondary-500">Submitted</span>
                <span>{formatDateTime(selectedPayment.createdAt)}</span>
              </div>
              {selectedPayment.notes && (
                <div className="py-2">
                  <p className="text-secondary-500 text-sm">Notes</p>
                  <p className="text-secondary-700">{selectedPayment.notes}</p>
                </div>
              )}
            </div>

            {/* Actions for pending payments */}
            {selectedPayment.status === 'pending' && (
              <div className="flex gap-3 pt-4">
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={() => {
                    setRejectPayment(selectedPayment);
                    setSelectedPayment(null);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
                <Button
                  variant="success"
                  className="flex-1"
                  onClick={() => {
                    confirmMutation.mutate(selectedPayment.id);
                  }}
                  isLoading={confirmMutation.isPending}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Confirm
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Reject Modal */}
      <Modal
        isOpen={!!rejectPayment}
        onClose={() => {
          setRejectPayment(null);
          setRejectReason('');
        }}
        title="Reject Payment"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-secondary-600">
            Are you sure you want to reject this payment of{' '}
            <span className="font-semibold">{formatCurrency(rejectPayment?.amount || 0)}</span>?
          </p>
          <Textarea
            label="Reason for rejection"
            placeholder="Enter reason..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            rows={3}
          />
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setRejectPayment(null);
                setRejectReason('');
              }}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={() => rejectMutation.mutate({
                paymentId: rejectPayment.id,
                reason: rejectReason
              })}
              isLoading={rejectMutation.isPending}
            >
              Reject Payment
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
