// src/features/products/products.columns.js
export const productColumns = [
  { key: "name", label: "Product" },
  { key: "price", label: "Price", format: v => `$${v}` },
  { key: "stock", label: "Stock" },
  { key: "status", label: "Status", type: "badge" },
];
