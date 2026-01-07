// routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) return null;

  return token ? <Navigate to="/admin" replace /> : children;
};

export default PublicRoute;
