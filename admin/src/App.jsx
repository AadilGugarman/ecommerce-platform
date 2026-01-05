import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* /admin */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* /admin/dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Admin fallback */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>

      {/* Global fallback */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
};

export default App;
