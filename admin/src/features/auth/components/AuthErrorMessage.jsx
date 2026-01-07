// features/auth/components/AuthErrorMessage.jsx

const AuthErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-sm text-center text-red-600">
      {message}
    </div>
  );
};

export default AuthErrorMessage;
