import AuthCardLayout from "../../components/Auth/AuthCardLayout";

const ResetPassword = () => {
  return (
    <AuthCardLayout title="Reset Password">
      <input
        type="password"
        placeholder="New Password"
        className="w-full p-2 mb-4 border-b"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 mb-4 border-b"
      />

      <button className="w-full py-3 text-white bg-black rounded-lg">
        Update Password
      </button>
    </AuthCardLayout>
  );
};

export default ResetPassword;
