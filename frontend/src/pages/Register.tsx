import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { registerUser } from "../features/auth/authThunk";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (form.password !== form.confirm_password) {
        toast.error("Passwords do not match");
        return;
      }

      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      };

      const response = await dispatch(registerUser(payload)).unwrap();
      toast.success(response.message);
      setForm({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        role: "",
      });
    } catch (error: any) {
      toast.error(error || "Registration failed");
    }
  };

  return (
    <div className="pb-15 bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">
        {/* Left */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">LocalConnect</h2>

          <p className="text-lg mb-8">
            Join the largest local services platform.
          </p>

          <ul className="space-y-4">
            <li>✓ Find trusted local services</li>
            <li>✓ Promote your business</li>
            <li>✓ Get local customers</li>
            <li>✓ Easy account management</li>
          </ul>
        </div>

        {/* Right */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-8">Create Account</h2>

          <form onSubmit={SubmitHandler} className="space-y-5">
            <input
              name="name"
              type="text"
              value={form.name}
              placeholder="Full Name"
              className="w-full p-4 border rounded-xl"
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="Email Address"
              className="w-full p-4 border rounded-xl"
              onChange={handleChange}
            />

            <input
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-xl"
              onChange={handleChange}
            />

            <input
              name="confirm_password"
              value={form.confirm_password}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 border rounded-xl"
              onChange={handleChange}
            />

            {/* Role Selection */}

            <div>
              <p className="font-semibold mb-3">Register As</p>

              <div className="grid grid-cols-2 gap-4">
                <label
                  className={`border p-4 rounded-xl cursor-pointer ${
                    form.role === "user" ? "border-indigo-600 bg-indigo-50" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={form.role === "user"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Customer
                </label>

                <label
                  className={`border p-4 rounded-xl cursor-pointer ${
                    form.role === "owner"
                      ? "border-indigo-600 bg-indigo-50"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="owner"
                    checked={form.role === "owner"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Business Owner
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white cursor-pointer py-4 rounded-xl font-semibold"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
