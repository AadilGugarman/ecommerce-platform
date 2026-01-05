import { useNavigate } from "react-router-dom";
import AuthCardLayout from "../../components/Auth/AuthCardLayout";

const OTPVerification = () => {
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    // 🔴 Backend baad me
    // Abhi direct reset password page
    navigate("/reset-password");
  };

  return (
    <AuthCardLayout title="Verify OTP">
      <p className="mb-4 text-sm text-center text-gray-600">
        OTP sent to your email
      </p>

      <div className="flex justify-center gap-2 mb-6">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            maxLength="1"
            className="w-10 h-10 text-center border rounded-lg"
          />
        ))}
      </div>

      <button
        onClick={handleVerifyOtp}
        className="w-full py-3 text-white bg-black rounded-lg"
      >
        Verify OTP
      </button>
    </AuthCardLayout>
  );
};

export default OTPVerification;
