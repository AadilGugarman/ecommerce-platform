import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuth();

  // Agar already logged in hai → login/signup nahi dikhana
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
