import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default ProtectedRoute;
