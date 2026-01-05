import { useNavigate } from "react-router-dom";
import AuthCardLayout from "../../components/Auth/AuthCardLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // 🔴 Abhi backend nahi hai
    // Isliye direct OTP page pe jaa rahe hain
    navigate("/verify-otp");
  };

  return (
    <AuthCardLayout title="Forgot Password">
      <p className="mb-4 text-sm text-gray-600">
        Enter your registered email address to receive OTP
      </p>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-2 mb-4 border-b outline-none"
      />

      <button
        onClick={handleSendOtp}
        className="w-full py-3 text-white bg-black rounded-lg"
      >
        Send OTP
      </button>
    </AuthCardLayout>
  );
};

export default ForgotPassword;
