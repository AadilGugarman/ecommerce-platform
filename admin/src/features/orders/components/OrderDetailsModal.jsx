import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";

import OrderInvoice from "./OrderInvoice";
import OrderTimeline from "./OrderTimeline";

const OrderDetailsModal = ({ open, onClose, order }) => {
  if (!order) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Order Details</DialogTitle>

      <DialogContent className="space-y-4">
        {/* Basic Info */}
        <div className="space-y-1">
          <div><strong>Order ID:</strong> {order.id}</div>
          <div><strong>Customer:</strong> {order.customerName}</div>
          <div><strong>Email:</strong> {order.email}</div>
          <div><strong>Status:</strong> {order.status}</div>
          <div><strong>Payment:</strong> {order.paymentStatus}</div>
        </div>

        <Divider />

        {/* Items */}
        {order.items?.length > 0 && (
          <div>
            <strong>Items:</strong>
            <ul className="mt-1 ml-6 list-disc">
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.qty} — ₹{item.price}
                </li>
              ))}
            </ul>

            <div className="mt-2 font-semibold">
              Total: ₹{order.total}
            </div>
          </div>
        )}

        <Divider />

        {/* Timeline */}
        {order.timeline && (
          <OrderTimeline timeline={order.timeline} />
        )}
      </DialogContent>

      <DialogActions className="flex justify-between">
        <OrderInvoice order={order} />
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsModal;
