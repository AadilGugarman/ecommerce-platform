// src/pages/Products.jsx
import { useEffect, useState } from "react";
import AdminTable from "../components/tables/AdminTable";
import { productColumns } from "../features/products/products.columns";
import { getProducts } from "../services/mockApi";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <AdminTable
      title="Products"
      columns={productColumns}
      data={data}
      loading={loading}
    />
  );
};

export default Products;
