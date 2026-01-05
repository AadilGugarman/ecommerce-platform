import React from "react";

const AuthCardLayout = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl sm:p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.jpg" alt="Logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-2xl font-bold text-center">{title}</h2>

        {children}
      </div>
    </div>
  );
};

export default AuthCardLayout;
