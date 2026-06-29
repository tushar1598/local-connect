import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserDashboard from "../components/user/userDashboard";
import AdminDashboard from "../components/admin/adminDashboard";
import OwnerDashboard from "../components/owner/ownerDashboard";
import PublicRoute from "./PublicRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";
import Home from "../components/home/home";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicRoute />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/" element={<Home />} />

      {/* Owner */}
      <Route element={<RoleProtectedRoute allowedRole="owner" />}>
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
      </Route>

      {/* User */}
      <Route element={<RoleProtectedRoute allowedRole="user" />}>
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Route>

      {/* Admin */}
      <Route element={<RoleProtectedRoute allowedRole="admin" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
