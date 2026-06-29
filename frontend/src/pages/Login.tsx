import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { loginUser } from "../features/auth/authThunk";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFrom((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await dispatch(
        loginUser({
          email: form.email,
          password: form.password,
        }),
      ).unwrap();

      toast.success("Login Successful");

      if (response.user.role === "owner") {
        navigate("/owner/dashboard");
      }

      if (response.user.role === "user") {
        navigate("/user/dashboard");
      }

      if (response.user.role === "admin") {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-24 pb-40">
        {" "}
        <div className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>

            <p className="text-lg mb-8">
              Login to manage your account and explore trusted local services.
            </p>

            <ul className="space-y-4">
              <li>✓ Access your dashboard</li>
              <li>✓ Manage your business listings</li>
              <li>✓ Connect with local customers</li>
              <li>✓ Track reviews and inquiries</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="p-10">
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>

            <p className="text-gray-500 mb-8">
              Enter your credentials to continue
            </p>

            <form onSubmit={SubmitHandler} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>

                <input
                  name="email"
                  value={form.email}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <input
                  name="password"
                  value={form.password}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-indigo-600 text-sm font-medium"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition text-white py-4 rounded-xl font-semibold"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-semibold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
