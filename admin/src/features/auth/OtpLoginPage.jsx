import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AuthFormInput from "./components/AuthFormInput";
import AuthButton from "./components/AuthButton";
import AuthErrorMessage from "./components/AuthErrorMessage";
import { useAuthExtras } from "./hooks/useAuthExtras";

const OtpLoginPage = () => {
  const {
    sendOtp,
    verifyOtp,
    login,
    error,
  } = useAuthExtras();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = async () => {
    const ok = await sendOtp(email);
    if (ok) setStep(2);
  };

  const handleVerifyOtp = async () => {
    const ok = await verifyOtp(otp);
    if (ok) {
      // mock login
      await login({ email, password: "otp-login" });
      navigate("/admin", { replace: true });
    }
  };

  return (
    <AuthLayout>
      <h2 className="mb-4 text-xl font-semibold text-center">
        OTP Login
      </h2>

      {step === 1 && (
        <>
          <AuthFormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthButton onClick={handleSendOtp}>
            Send OTP
          </AuthButton>
        </>
      )}

      {step === 2 && (
        <>
          <AuthFormInput
            label="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <AuthButton onClick={handleVerifyOtp}>
            Verify OTP
          </AuthButton>
        </>
      )}

      <AuthErrorMessage message={error} />
    </AuthLayout>
  );
};

export default OtpLoginPage;
