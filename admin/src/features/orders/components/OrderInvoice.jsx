import { Button } from "@mui/material";
import { generateInvoicePDF } from "../services/invoiceService";

const OrderInvoice = ({ order }) => {
  if (!order) return null;

  return (
    <Button
      size="small"
      variant="contained"
      onClick={() => generateInvoicePDF(order)}
    >
      Download Invoice
    </Button>
  );
};

export default OrderInvoice;
