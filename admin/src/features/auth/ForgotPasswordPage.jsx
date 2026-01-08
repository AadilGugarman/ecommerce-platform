import { useState } from "react";
import AuthLayout from "./AuthLayout";
import AuthFormInput from "./components/AuthFormInput";
import AuthButton from "./components/AuthButton";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    alert("Password reset link sent (mock)");
  };

  return (
    <AuthLayout>
      <h2 className="mb-4 text-xl font-semibold text-center">
        Forgot Password
      </h2>

      <div className="space-y-4">
        <AuthFormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthButton onClick={handleSubmit}>
          Send Reset Link
        </AuthButton>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
