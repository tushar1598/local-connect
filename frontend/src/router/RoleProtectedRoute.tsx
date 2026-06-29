import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hook";

interface Props {
  allowedRole: "owner" | "user" | "admin";
}

const RoleProtectedRoute = ({ allowedRole }: Props) => {
  const { isAuthenticated, authLoading, user } = useAppSelector(
    (state) => state.auth,
  );

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
