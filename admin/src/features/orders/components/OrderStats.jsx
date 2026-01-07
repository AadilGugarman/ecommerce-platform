import { Chip } from "@mui/material";

const OrderStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Chip label={`Total: ${stats.total}`} />
      <Chip color="warning" label={`Pending: ${stats.pending}`} />
      <Chip color="info" label={`Shipped: ${stats.shipped}`} />
      <Chip color="success" label={`Delivered: ${stats.delivered}`} />
    </div>
  );
};

export default OrderStats;
