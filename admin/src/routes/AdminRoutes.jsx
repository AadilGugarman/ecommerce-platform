import { Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layout/AdminLayout";

// existing pages
import DashboardPage from "../features/dashboard/DashboardPage";
import CategoriesPage from "../features/categories/CategoriesPage";
import ProductsPage from "../features/products/ProductsPage";
import UsersPage from "../features/users/UsersPage";
import OrdersPage from "../features/orders/OrdersPage";
import ReportsPage from "../features/reports/ReportsPage";
import RolesPage from "../features/roles/RolesPage";
import ActivityLogsPage from "../features/activity/ActivityLogsPage"; 
import CouponsPage from "../features/coupons/CouponsPage";


// ✅ NEW PAGES
import ProfilePage from "../features/profile/ProfilePage";
import SettingsPage from "../features/settings/SettingsPage";

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
      <Route index element={<Navigate to="/admin/dashboard" replace />} />

      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="reports" element={<ReportsPage />} />
      <Route path="roles" element={<RolesPage />} />
      <Route path="activity-logs" element={<ActivityLogsPage />} />
      <Route path="coupons" element={<CouponsPage />} />


      {/* ✅ PROFILE & SETTINGS */}
      <Route path="profile" element={<ProfilePage />} />
      <Route path="settings" element={<SettingsPage />} />

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Route>
  );
};

export default AdminRoutes;
