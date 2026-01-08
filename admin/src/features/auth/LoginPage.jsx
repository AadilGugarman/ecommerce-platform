import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AuthLayout from "./AuthLayout";
import AuthFormInput from "./components/AuthFormInput";
import AuthButton from "./components/AuthButton";
import AuthErrorMessage from "./components/AuthErrorMessage";
import { useAuth } from "./hooks/useAuth";

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/admin";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.password) return;

    const success = await login(form);
    if (success) navigate(from, { replace: true });
  };

  return (
    <AuthLayout>
      {/* Heading */}
      <h2 className="mb-1 text-2xl font-bold text-center">
        Welcome Back 👋
      </h2>
      <p className="mb-6 text-sm text-center text-slate-500">
        Login to continue to admin panel
      </p>

      <div className="space-y-4">
        {/* Email */}
        <AuthFormInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* Password */}
        <AuthFormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* Extras */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(!showPassword)
              }
            />
            Show password
          </label>

          <button
            onClick={() => navigate("/forgot-password")}
            className="text-indigo-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Error */}
        <AuthErrorMessage message={error} />

        {/* Button */}
        <AuthButton loading={loading} onClick={handleSubmit}>
          {loading ? "Logging in..." : "Login"}
        </AuthButton>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
