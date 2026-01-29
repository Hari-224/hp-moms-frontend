import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Receipt, 
  Calendar,
  Building2,
  Plus,
  Eye,
  Send,
  IndianRupee
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { billingApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Input, { Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate } from '../../utils/helpers';
import toast from 'react-hot-toast';

export default function AgencyBillsPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [filterStatus, setFilterStatus] = useState('');
  const [generateData, setGenerateData] = useState({
    houseId: '',
    periodStart: '',
    periodEnd: ''
  });

  const agencyId = userData?.agencyId;

  // Fetch bills
  const { data: billsData, isLoading } = useQuery({
    queryKey: ['agencyBills', agencyId, filterStatus],
    queryFn: () => billingApi.getAgencyBills(agencyId, { 
      status: filterStatus || undefined 
    }),
    enabled: !!agencyId
  });

  // Generate bill mutation
  const generateMutation = useMutation({
    mutationFn: (data) => billingApi.generate(data),
    onSuccess: () => {
      toast.success('Bill generated successfully!');
      setShowGenerateModal(false);
      setGenerateData({ houseId: '', periodStart: '', periodEnd: '' });
      queryClient.invalidateQueries(['agencyBills']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to generate bill');
    }
  });

  const bills = billsData?.data?.bills || [];

  // Calculate summary
  const summary = bills.reduce((acc, bill) => {
    acc.total += bill.totalAmount || 0;
    acc.paid += bill.paidAmount || 0;
    acc.pending += (bill.totalAmount || 0) - (bill.paidAmount || 0);
    return acc;
  }, { total: 0, paid: 0, pending: 0 });

  const handleGenerate = () => {
    if (!generateData.houseId || !generateData.periodStart || !generateData.periodEnd) {
      toast.error('Please fill all fields');
      return;
    }
    generateMutation.mutate({
      agencyId,
      ...generateData
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
            <h1 className="text-2xl font-bold text-secondary-900">Bills</h1>
            <p className="text-secondary-600 mt-1">
              Generate and manage house bills
            </p>
          </div>
          <Button onClick={() => setShowGenerateModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Generate Bill
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-secondary-500">Total Billed</p>
              <p className="text-2xl font-bold text-secondary-900">
                {formatCurrency(summary.total)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-secondary-500">Collected</p>
              <p className="text-2xl font-bold text-success-600">
                {formatCurrency(summary.paid)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-secondary-500">Pending</p>
              <p className="text-2xl font-bold text-danger-600">
                {formatCurrency(summary.pending)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input w-40"
              >
                <option value="">All Status</option>
                <option value="issued">Issued</option>
                <option value="partial">Partial</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Bills list */}
        {bills.length === 0 ? (
          <EmptyState
            icon={Receipt}
            title="No Bills Found"
            description="Generate your first bill to start tracking payments"
            action={
              <Button onClick={() => setShowGenerateModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Generate Bill
              </Button>
            }
          />
        ) : (
          <div className="space-y-4">
            {bills.map((bill) => (
              <Card key={bill.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          {bill.houseName}
                        </h3>
                        <p className="text-sm text-secondary-500">
                          {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-secondary-500">Total</p>
                        <p className="text-lg font-bold text-secondary-900">
                          {formatCurrency(bill.totalAmount)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-secondary-500">Paid</p>
                        <p className="text-lg font-semibold text-success-600">
                          {formatCurrency(bill.paidAmount || 0)}
                        </p>
                      </div>
                      <StatusBadge status={bill.status} />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedBill(bill)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Generate Bill Modal */}
      <Modal
        isOpen={showGenerateModal}
        onClose={() => setShowGenerateModal(false)}
        title="Generate Bill"
        size="md"
      >
        <div className="space-y-4">
          <Select
            label="Select House"
            options={[
              { value: 'house1', label: 'Sample House 1' },
              { value: 'house2', label: 'Sample House 2' }
            ]}
            value={generateData.houseId}
            onChange={(e) => setGenerateData({ ...generateData, houseId: e.target.value })}
          />

          <Input
            label="Period Start"
            type="date"
            value={generateData.periodStart}
            onChange={(e) => setGenerateData({ ...generateData, periodStart: e.target.value })}
          />

          <Input
            label="Period End"
            type="date"
            value={generateData.periodEnd}
            onChange={(e) => setGenerateData({ ...generateData, periodEnd: e.target.value })}
          />

          <div className="flex gap-3 pt-4">
            <Button 
              variant="secondary" 
              className="flex-1"
              onClick={() => setShowGenerateModal(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1"
              onClick={handleGenerate}
              isLoading={generateMutation.isPending}
            >
              Generate Bill
            </Button>
          </div>
        </div>
      </Modal>

      {/* Bill Details Modal */}
      <Modal
        isOpen={!!selectedBill}
        onClose={() => setSelectedBill(null)}
        title="Bill Details"
        size="lg"
      >
        {selectedBill && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-secondary-500">House</p>
                <p className="font-medium text-secondary-900">{selectedBill.houseName}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Period</p>
                <p className="font-medium text-secondary-900">
                  {formatDate(selectedBill.periodStart)} - {formatDate(selectedBill.periodEnd)}
                </p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Total Amount</p>
                <p className="font-bold text-xl text-secondary-900">
                  {formatCurrency(selectedBill.totalAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Status</p>
                <StatusBadge status={selectedBill.status} />
              </div>
            </div>

            {/* Items */}
            <div className="border-t border-secondary-200 pt-4">
              <h4 className="font-medium text-secondary-900 mb-3">Order Items</h4>
              <div className="bg-secondary-50 rounded-lg p-3 max-h-60 overflow-y-auto">
                {selectedBill.items?.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 text-sm">
                    <span className="text-secondary-600">
                      {item.name} × {item.quantity} ({formatDate(item.date)})
                    </span>
                    <span className="font-medium text-secondary-900">
                      {formatCurrency(item.total)}
                    </span>
                  </div>
                )) || <p className="text-secondary-500">No items</p>}
              </div>
            </div>

            {/* Payment summary */}
            <div className="border-t border-secondary-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-secondary-500">Total Amount</span>
                <span className="font-semibold">{formatCurrency(selectedBill.totalAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-500">Paid Amount</span>
                <span className="text-success-600">{formatCurrency(selectedBill.paidAmount || 0)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-medium">Remaining</span>
                <span className="font-bold text-danger-600">
                  {formatCurrency((selectedBill.totalAmount || 0) - (selectedBill.paidAmount || 0))}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
}
