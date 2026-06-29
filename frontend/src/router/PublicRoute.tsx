import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hook";

const PublicRoute = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    if (user?.role === "owner") {
      return <Navigate to="/owner/dashboard" replace />;
    }

    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }

    if (user?.role === "user") {
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default PublicRoute;
