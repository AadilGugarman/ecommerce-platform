// features/products/ProductsPage.jsx

import { useState } from "react";
import { Button, Select, MenuItem, TextField } from "@mui/material";

import { useProducts } from "./hooks/useProducts";
import { mockCategories } from "./services/productService";
import ProductsTable from "../../components/tables/ProductsTable";
import ProductFormModal from "./components/ProductFormModal";

const ProductsPage = () => {
  const {
    products,
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    statusFilter,
    setStatusFilter,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Products</h2>
        <Button
          variant="contained"
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          Add Product
        </Button>
      </div>

      <div className="flex gap-4">
        <TextField
          size="small"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          size="small"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <MenuItem value="All">All Categories</MenuItem>
          {mockCategories.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>

        <Select
          size="small"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="All">All Status</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </div>

      <ProductsTable
        products={products}
        categories={mockCategories}
        onEdit={(p) => {
          setEditing(p);
          setOpen(true);
        }}
        onDelete={deleteProduct}
      />

      <ProductFormModal
        open={open}
        initialData={editing}
        categories={mockCategories}
        onClose={() => setOpen(false)}
        onSubmit={(data) =>
          editing
            ? updateProduct(editing.id, data)
            : addProduct(data)
        }
      />
    </div>
  );
};

export default ProductsPage;
