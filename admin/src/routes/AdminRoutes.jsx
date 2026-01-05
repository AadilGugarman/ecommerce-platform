import { Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import Categories from "../pages/Categories";

const AdminRoutes = () => {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
      <Route path="users" element={<Users />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Route>
  );
};

export default AdminRoutes;
