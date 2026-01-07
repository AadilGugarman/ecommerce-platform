// features/auth/AuthLayout.jsx

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-6 bg-white shadow rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
