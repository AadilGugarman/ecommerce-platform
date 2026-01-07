import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Admin */}
      {AdminRoutes()}

      {/* Default */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
