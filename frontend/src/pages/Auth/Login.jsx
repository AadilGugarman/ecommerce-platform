import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCardLayout from "../../components/Auth/AuthCardLayout";
import SocialLogin from "../../components/Auth/SocialLogin";
import { useAuth } from "../../components/context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // 🔥 BACKEND READY (mock response)
    const response = {
      user: {
        id: 1,
        name: "Test User",
        email: form.email,
      },
    };

    // 🔥 VERY IMPORTANT
    login(response.user);

    // 🔥 redirect after login
    navigate("/", { replace: true });
  };

  return (
    <AuthCardLayout title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border-b outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-b outline-none"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="text-sm text-right">
          <Link to="/forgot-password" className="text-blue-600">
            Forgot Password?
          </Link>
        </div>

        <button className="w-full py-3 text-white bg-black rounded-lg">
          Sign In
        </button>

        <Link to="/" className="block w-full py-2 text-center border rounded-lg">
          Cancel
        </Link>

        <p className="text-sm text-center">
          Not registered?{" "}
          <Link to="/signup" className="font-medium text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>

      <SocialLogin />
    </AuthCardLayout>
  );
};

export default Login;
