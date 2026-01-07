import { Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import DashboardPage from "../features/dashboard/DashboardPage";
import CategoriesPage from "../features/categories/CategoriesPage";
import OrdersPage from "../features/orders/OrdersPage";
import ProductsPage from "../features/products/ProductsPage";
import UsersPage from "../features/users/UsersPage";

const AdminRoutes = () => {
  return (
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Route>
  );
};

export default AdminRoutes;
