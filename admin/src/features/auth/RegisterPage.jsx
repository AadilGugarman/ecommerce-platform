// features/auth/RegisterPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "./AuthLayout";
import AuthFormInput from "./components/AuthFormInput";
import AuthButton from "./components/AuthButton";
import AuthErrorMessage from "./components/AuthErrorMessage";
import { useAuth } from "./hooks/useAuth";

const RegisterPage = () => {
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) return;
    const success = await register(form);
    if (success) navigate("/login");
  };

  return (
    <AuthLayout>
      <h2 className="mb-4 text-xl font-semibold text-center">
        Register
      </h2>

      <div className="space-y-4">
        <AuthFormInput
          label="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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
          Register
        </AuthButton>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
