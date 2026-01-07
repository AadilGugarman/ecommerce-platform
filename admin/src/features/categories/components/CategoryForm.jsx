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

const CategoryForm = ({
  open,
  onClose,
  onSubmit,
  initialData,
  categories = [],
}) => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    parentId: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        slug: initialData.slug,
        parentId: initialData.parentId || "",
      });
    } else {
      setForm({ name: "", slug: "", parentId: "" });
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({
      ...form,
      parentId: form.parentId || null,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {initialData ? "Edit Category" : "Add Category"}
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
          label="Slug"
          fullWidth
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <TextField
          select
          label="Parent Category"
          fullWidth
          value={form.parentId}
          onChange={(e) =>
            setForm({ ...form, parentId: e.target.value })
          }
        >
          <MenuItem value="">None</MenuItem>
          {categories.map((cat) => (
            <MenuItem
              key={cat.id}
              value={cat.id}
              disabled={initialData?.id === cat.id}
            >
              {cat.name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryForm;
