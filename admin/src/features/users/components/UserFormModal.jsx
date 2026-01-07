// features/users/components/UserFormModal.jsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const UserFormModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleSave = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {initialData ? "Edit User" : "Add User"}
      </DialogTitle>

      <DialogContent className="space-y-4">
        <TextField
          label="Name"
          fullWidth
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <TextField
          label="Email"
          fullWidth
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <TextField
          select
          label="Role"
          fullWidth
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserFormModal;
