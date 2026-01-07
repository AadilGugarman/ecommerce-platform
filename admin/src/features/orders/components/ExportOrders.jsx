import { Button } from "@mui/material";
import { exportOrdersToCSV } from "../services/orderService";

const ExportOrders = ({ orders }) => {
  return (
    <Button
      variant="outlined"
      onClick={() => exportOrdersToCSV(orders)}
    >
      Export CSV
    </Button>
  );
};

export default ExportOrders;
