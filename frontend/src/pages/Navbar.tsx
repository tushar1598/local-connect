import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, MapPin, LayoutDashboard, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { logout } from "../features/auth/authSlice";
import { logoutUser } from "../features/auth/authThunk";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authLoading, isAuthenticated, user } = useAppSelector(
    (state) => state.auth,
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();

      dispatch(logout());

      toast.success("Logout Successful");

      navigate("/login");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const dashboardRoute =
    user?.role === "owner"
      ? "/owner/dashboard"
      : user?.role === "admin"
        ? "/admin/dashboard"
        : "/user/dashboard";

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
              <MapPin size={20} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Local<span className="text-indigo-600">Connect</span>
              </h2>

              <p className="-mt-1 text-xs text-blue-500">
                Find Trusted Local Services
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#businesses">Businesses</a>
            <a href="#about">About</a>
          </div>

          {/* Right */}

          <div className="hidden items-center gap-4 lg:flex">
            {authLoading ? (
              <>
                <div className="h-11 w-24 animate-pulse rounded-xl bg-gray-200" />
                <div className="h-11 w-28 animate-pulse rounded-xl bg-gray-200" />
              </>
            ) : !isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="cursor-pointer rounded-xl border px-6 py-3 font-medium transition hover:bg-gray-100">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition hover:scale-105">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <>
                <NavLink to={dashboardRoute}>
                  <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 font-medium text-white shadow-lg transition hover:scale-105">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>
                </NavLink>

                {/* Avatar */}

                <div className="relative group">
                  {/* Avatar */}
                  <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-white shadow-lg transition duration-300 hover:scale-105">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>

                  {/* Tooltip */}
                  <div className="pointer-events-none absolute right-0 top-14 w-52 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-gray-500">👋 Welcome Back</p>

                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      {user?.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      You are logged in as
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-xs font-semibold capitalize text-white">
                      {user?.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="cursor-pointer rounded-xl border border-red-500 p-3 text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  <LogOut size={18} />
                </button>
              </>
            )}
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">
            <div className="flex flex-col gap-5 p-6">
              <a href="/">Home</a>
              <a href="#services">Services</a>
              <a href="/">Businesses</a>
              <a href="/">About</a>
              {!isAuthenticated ? (
                <>
                  <Link to="/login">
                    <button className="w-full rounded-xl border py-3">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="mt-2 w-full rounded-xl bg-indigo-600 py-3 text-white">
                      Register
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={dashboardRoute}>
                    <button className="w-full rounded-xl bg-indigo-600 py-3 text-white">
                      Dashboard
                    </button>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl border border-red-500 py-3 text-red-500"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
