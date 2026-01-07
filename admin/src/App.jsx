import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoute from "./routes/PublicRoute";
import NotFoundPage from "./features/not-found/NotFoundPage";

const App = () => {
  return (
    <Routes>
      {/* 🔓 Public (ONLY for logged-out users) */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

      {/* 🔐 Admin (ONLY for logged-in users) */}
      {AdminRoutes()}

      {/* Home */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      {/* 🌍 Global 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
