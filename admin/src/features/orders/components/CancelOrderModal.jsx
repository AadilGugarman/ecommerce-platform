import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const CancelOrderModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cancel Order</DialogTitle>
      <DialogContent>
        Are you sure you want to cancel this order?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Yes, Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelOrderModal;
