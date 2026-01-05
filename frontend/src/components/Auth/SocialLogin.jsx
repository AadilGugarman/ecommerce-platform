import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <>
      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-3 text-sm text-gray-500">
          Or continue with social account
        </span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <button
        type="button"
        className="flex items-center justify-center w-full gap-2 py-2 transition border rounded-lg hover:bg-gray-50"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </>
  );
};

export default SocialLogin;
