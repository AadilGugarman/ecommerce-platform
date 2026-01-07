// features/auth/LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "./AuthLayout";
import AuthFormInput from "./components/AuthFormInput";
import AuthButton from "./components/AuthButton";
import AuthErrorMessage from "./components/AuthErrorMessage";
import { useAuth } from "./hooks/useAuth";

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (!form.email || !form.password) return;
    const success = await login(form);
    if (success) navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <h2 className="mb-4 text-xl font-semibold text-center">
        Login
      </h2>

      <div className="space-y-4">
        <AuthFormInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <AuthFormInput
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <AuthErrorMessage message={error} />

        <AuthButton loading={loading} onClick={handleSubmit}>
          Login
        </AuthButton>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
