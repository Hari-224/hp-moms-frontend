import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Receipt, 
  Calendar,
  Eye,
  IndianRupee,
  Download
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { billingApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate } from '../../utils/helpers';

export default function HouseBillsPage() {
  const { userData } = useAuth();
  const [selectedBill, setSelectedBill] = useState(null);
  const [filterStatus, setFilterStatus] = useState('');

  const houseId = userData?.houseId;

  // Fetch bills
  const { data: billsData, isLoading } = useQuery({
    queryKey: ['houseBills', houseId, filterStatus],
    queryFn: () => billingApi.getHouseBills(houseId, {
      status: filterStatus || undefined
    }),
    enabled: !!houseId
  });

  const bills = billsData?.data?.bills || [];

  // Calculate totals
  const totals = bills.reduce((acc, bill) => {
    acc.total += bill.totalAmount || 0;
    acc.paid += bill.paidAmount || 0;
    acc.pending += (bill.totalAmount || 0) - (bill.paidAmount || 0);
    return acc;
  }, { total: 0, paid: 0, pending: 0 });

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
          <h1 className="text-2xl font-bold text-secondary-900">House Bills</h1>
          <p className="text-secondary-600 mt-1">
            View and track bills for your house
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Billed</p>
              <p className="text-2xl font-bold text-secondary-900">
                {formatCurrency(totals.total)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Paid</p>
              <p className="text-2xl font-bold text-success-600">
                {formatCurrency(totals.paid)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Pending</p>
              <p className="text-2xl font-bold text-danger-600">
                {formatCurrency(totals.pending)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              {['', 'issued', 'partial', 'paid', 'overdue'].map((status) => (
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

        {/* Bills list */}
        {bills.length === 0 ? (
          <EmptyState
            icon={Receipt}
            title="No Bills Found"
            description="You don't have any bills yet"
          />
        ) : (
          <div className="space-y-4">
            {bills.map((bill) => (
              <Card key={bill.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <Receipt className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          Bill #{bill.id.slice(-6).toUpperCase()}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-secondary-500">
                          <Calendar className="h-4 w-4" />
                          {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                        </div>
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
                        <p className="text-sm text-secondary-500">Balance</p>
                        <p className="text-lg font-semibold text-danger-600">
                          {formatCurrency((bill.totalAmount || 0) - (bill.paidAmount || 0))}
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
                <p className="text-sm text-secondary-500">Bill ID</p>
                <p className="font-medium font-mono">
                  #{selectedBill.id.slice(-6).toUpperCase()}
                </p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Period</p>
                <p className="font-medium">
                  {formatDate(selectedBill.periodStart)} - {formatDate(selectedBill.periodEnd)}
                </p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Status</p>
                <StatusBadge status={selectedBill.status} />
              </div>
              <div>
                <p className="text-sm text-secondary-500">Agency</p>
                <p className="font-medium">{selectedBill.agencyName}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t border-secondary-200 pt-4">
              <h4 className="font-medium text-secondary-900 mb-3">Order Details</h4>
              <div className="bg-secondary-50 rounded-lg p-3 max-h-60 overflow-y-auto">
                {selectedBill.items?.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 text-sm border-b border-secondary-100 last:border-0">
                    <div>
                      <span className="text-secondary-900">{item.name}</span>
                      <span className="text-secondary-500"> × {item.quantity}</span>
                      <span className="text-secondary-400 text-xs ml-2">
                        ({formatDate(item.date)})
                      </span>
                    </div>
                    <span className="font-medium text-secondary-900">
                      {formatCurrency(item.total)}
                    </span>
                  </div>
                )) || <p className="text-secondary-500 text-center py-4">No items</p>}
              </div>
            </div>

            {/* Payment summary */}
            <div className="border-t border-secondary-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-secondary-500">Total Amount</span>
                <span className="font-semibold">{formatCurrency(selectedBill.totalAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-500">Paid Amount</span>
                <span className="text-success-600 font-medium">
                  {formatCurrency(selectedBill.paidAmount || 0)}
                </span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t border-secondary-200">
                <span className="font-semibold">Balance Due</span>
                <span className="font-bold text-danger-600">
                  {formatCurrency((selectedBill.totalAmount || 0) - (selectedBill.paidAmount || 0))}
                </span>
              </div>
            </div>

            {/* Payment History */}
            {selectedBill.payments?.length > 0 && (
              <div className="border-t border-secondary-200 pt-4">
                <h4 className="font-medium text-secondary-900 mb-3">Payment History</h4>
                <div className="space-y-2">
                  {selectedBill.payments.map((payment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 bg-secondary-50 px-3 rounded">
                      <div>
                        <span className="font-medium">{formatCurrency(payment.amount)}</span>
                        <span className="text-secondary-500 text-sm ml-2">
                          {formatDate(payment.date)}
                        </span>
                      </div>
                      <StatusBadge status={payment.status} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </Layout>
  );
}
