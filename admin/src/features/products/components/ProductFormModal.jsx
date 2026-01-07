// features/products/components/ProductFormModal.jsx

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

const ProductFormModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  categories,
}) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
    stock: "",
    status: "Active",
    image: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleSave = () => {
    onSubmit({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      categoryId: Number(form.categoryId),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {initialData ? "Edit Product" : "Add Product"}
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
          label="Image URL"
          fullWidth
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
        <TextField
          label="Stock"
          type="number"
          fullWidth
          value={form.stock}
          onChange={(e) =>
            setForm({ ...form, stock: e.target.value })
          }
        />
        <TextField
          select
          label="Category"
          fullWidth
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: e.target.value })
          }
        >
          {categories.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Status"
          fullWidth
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
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

export default ProductFormModal;
