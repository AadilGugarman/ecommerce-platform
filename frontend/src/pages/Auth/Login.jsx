import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthCardLayout from "../../components/Auth/AuthCardLayout";
import SocialLogin from "../../components//Auth/SocialLogin";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Login Data:", form);
  };

  return (
    <AuthCardLayout title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border-b outline-none focus:border-black"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-b outline-none focus:border-black"
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

        <button
          type="submit"
          className="w-full py-3 text-white bg-black rounded-lg hover:bg-gray-800"
        >
          Sign In
        </button>

        <Link
          to="/"
          className="block w-full py-2 text-center border rounded-lg"
        >
          Cancel
        </Link>

        <p className="mt-4 text-sm text-center">
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
