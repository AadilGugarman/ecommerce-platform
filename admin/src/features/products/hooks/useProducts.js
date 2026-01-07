// features/products/hooks/useProducts.js

import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const addProduct = (data) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...data }]);
  };

  const updateProduct = (id, data) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((p) =>
        categoryFilter === "All"
          ? true
          : p.categoryId === Number(categoryFilter)
      )
      .filter((p) =>
        statusFilter === "All"
          ? true
          : p.status === statusFilter
      );
  }, [products, search, categoryFilter, statusFilter]);

  return {
    products: filteredProducts,
    rawProducts: products,
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    statusFilter,
    setStatusFilter,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
