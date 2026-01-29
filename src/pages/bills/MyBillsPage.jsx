import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Receipt, 
  Calendar,
  IndianRupee,
  Upload,
  Image,
  Check,
  X,
  Eye
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../../contexts/AuthContext';
import { billingApi, paymentApi } from '../../services/api';
import { storage } from '../../config/firebase';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Input, { Select, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { PAYMENT_METHODS, PAYMENT_METHOD_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function MyBillsPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [selectedBill, setSelectedBill] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Fetch my bills
  const { data: billsData, isLoading } = useQuery({
    queryKey: ['myBills'],
    queryFn: () => billingApi.getMyBills({})
  });

  // Record payment mutation
  const recordPaymentMutation = useMutation({
    mutationFn: (data) => paymentApi.record(data),
    onSuccess: () => {
      toast.success('Payment recorded! Waiting for confirmation.');
      setShowPayment(false);
      setSelectedBill(null);
      setScreenshotUrl('');
      reset();
      queryClient.invalidateQueries(['myBills']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to record payment');
    }
  });

  const bills = billsData?.data?.bills || [];

  // Handle screenshot upload
  const handleScreenshotUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const fileName = `payments/${userData.id}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, fileName);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setScreenshotUrl(url);
      toast.success('Screenshot uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload screenshot');
    } finally {
      setUploading(false);
    }
  };

  // Submit payment
  const onSubmitPayment = (data) => {
    if (!screenshotUrl) {
      toast.error('Please upload a payment screenshot');
      return;
    }

    recordPaymentMutation.mutate({
      billId: selectedBill.id,
      amount: parseFloat(data.amount),
      method: data.method,
      transactionId: data.transactionId || '',
      screenshotUrl,
      notes: data.notes || ''
    });
  };

  // Calculate remaining amount
  const getRemainingAmount = (bill) => {
    return bill.totalAmount - (bill.paidAmount || 0);
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
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">My Bills</h1>
          <p className="text-secondary-600 mt-1">
            View and pay your bills
          </p>
        </div>

        {/* Bills */}
        {bills.length === 0 ? (
          <EmptyState
            icon={Receipt}
            title="No Bills Yet"
            description="You don't have any bills. Start ordering to see your bills here!"
          />
        ) : (
          <div className="space-y-4">
            {bills.map((bill) => (
              <Card key={bill.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Bill Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-secondary-400" />
                        <span className="font-medium text-secondary-900">
                          {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                        </span>
                        <StatusBadge status={bill.status} />
                      </div>
                      <p className="text-sm text-secondary-500">
                        {bill.itemCount || 0} orders • Generated on {formatDate(bill.createdAt)}
                      </p>
                    </div>

                    {/* Amount */}
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary-900">
                        {formatCurrency(bill.totalAmount)}
                      </p>
                      {bill.paidAmount > 0 && bill.status !== 'paid' && (
                        <p className="text-sm text-secondary-500">
                          Paid: {formatCurrency(bill.paidAmount)} | 
                          <span className="text-danger-600 font-medium">
                            {' '}Due: {formatCurrency(getRemainingAmount(bill))}
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedBill(bill)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      {bill.status !== 'paid' && (
                        <Button 
                          size="sm"
                          onClick={() => {
                            setSelectedBill(bill);
                            setShowPayment(true);
                          }}
                        >
                          <IndianRupee className="h-4 w-4 mr-1" />
                          Pay Now
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

      {/* Bill Details Modal */}
      <Modal
        isOpen={selectedBill && !showPayment}
        onClose={() => setSelectedBill(null)}
        title="Bill Details"
        size="lg"
      >
        {selectedBill && (
          <div className="space-y-4">
            {/* Period */}
            <div className="flex justify-between py-2 border-b border-secondary-100">
              <span className="text-secondary-500">Period</span>
              <span className="font-medium text-secondary-900">
                {formatDate(selectedBill.periodStart)} - {formatDate(selectedBill.periodEnd)}
              </span>
            </div>

            {/* Items */}
            <div>
              <h4 className="font-medium text-secondary-900 mb-2">Order Items</h4>
              <div className="bg-secondary-50 rounded-lg p-3 space-y-2 max-h-60 overflow-y-auto">
                {selectedBill.items?.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-secondary-600">
                      {item.name} × {item.quantity} ({formatDate(item.date)})
                    </span>
                    <span className="text-secondary-900">
                      {formatCurrency(item.total)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 pt-4 border-t border-secondary-200">
              <div className="flex justify-between">
                <span className="text-secondary-500">Total Amount</span>
                <span className="font-bold text-secondary-900">
                  {formatCurrency(selectedBill.totalAmount)}
                </span>
              </div>
              {selectedBill.paidAmount > 0 && (
                <div className="flex justify-between">
                  <span className="text-secondary-500">Paid Amount</span>
                  <span className="text-success-600">
                    {formatCurrency(selectedBill.paidAmount)}
                  </span>
                </div>
              )}
              {selectedBill.status !== 'paid' && (
                <div className="flex justify-between">
                  <span className="text-secondary-500">Remaining</span>
                  <span className="font-bold text-danger-600">
                    {formatCurrency(getRemainingAmount(selectedBill))}
                  </span>
                </div>
              )}
            </div>

            {/* Pay button */}
            {selectedBill.status !== 'paid' && (
              <Button 
                className="w-full"
                onClick={() => setShowPayment(true)}
              >
                <IndianRupee className="h-4 w-4 mr-2" />
                Pay Now
              </Button>
            )}
          </div>
        )}
      </Modal>

      {/* Payment Modal */}
      <Modal
        isOpen={showPayment}
        onClose={() => {
          setShowPayment(false);
          setScreenshotUrl('');
          reset();
        }}
        title="Record Payment"
        size="md"
      >
        {selectedBill && (
          <form onSubmit={handleSubmit(onSubmitPayment)} className="space-y-4">
            {/* Remaining amount */}
            <div className="bg-primary-50 rounded-lg p-4 text-center">
              <p className="text-sm text-primary-600">Amount Due</p>
              <p className="text-2xl font-bold text-primary-700">
                {formatCurrency(getRemainingAmount(selectedBill))}
              </p>
            </div>

            {/* Amount */}
            <Input
              label="Payment Amount"
              type="number"
              step="0.01"
              placeholder="Enter amount"
              defaultValue={getRemainingAmount(selectedBill)}
              error={errors.amount?.message}
              {...register('amount', { 
                required: 'Amount is required',
                min: { value: 1, message: 'Amount must be at least ₹1' },
                max: { 
                  value: getRemainingAmount(selectedBill), 
                  message: `Amount cannot exceed ₹${getRemainingAmount(selectedBill)}` 
                }
              })}
            />

            {/* Payment Method */}
            <Select
              label="Payment Method"
              options={Object.entries(PAYMENT_METHOD_LABELS).map(([value, label]) => ({
                value,
                label
              }))}
              error={errors.method?.message}
              {...register('method', { required: 'Please select a payment method' })}
            />

            {/* Transaction ID */}
            <Input
              label="Transaction ID / Reference (Optional)"
              placeholder="Enter UPI reference or transaction ID"
              {...register('transactionId')}
            />

            {/* Screenshot Upload */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                Payment Screenshot <span className="text-danger-500">*</span>
              </label>
              {screenshotUrl ? (
                <div className="relative">
                  <img 
                    src={screenshotUrl} 
                    alt="Payment screenshot" 
                    className="w-full h-48 object-contain bg-secondary-100 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setScreenshotUrl('')}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                  >
                    <X className="h-4 w-4 text-danger-600" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-secondary-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                  <div className="flex flex-col items-center">
                    {uploading ? (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
                    ) : (
                      <>
                        <Upload className="h-8 w-8 text-secondary-400 mb-2" />
                        <p className="text-sm text-secondary-500">
                          Click to upload payment screenshot
                        </p>
                      </>
                    )}
                  </div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleScreenshotUpload}
                    disabled={uploading}
                  />
                </label>
              )}
            </div>

            {/* Notes */}
            <Textarea
              label="Notes (Optional)"
              placeholder="Any additional notes..."
              rows={2}
              {...register('notes')}
            />

            {/* Submit */}
            <div className="flex gap-3 pt-4">
              <Button 
                type="button"
                variant="secondary" 
                className="flex-1"
                onClick={() => {
                  setShowPayment(false);
                  setScreenshotUrl('');
                  reset();
                }}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="flex-1"
                isLoading={recordPaymentMutation.isPending}
                disabled={!screenshotUrl || uploading}
              >
                <Check className="h-4 w-4 mr-2" />
                Submit Payment
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </Layout>
  );
}
