import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthCardLayout from "../../components/Auth/AuthCardLayout";
import SocialLogin from "../../components/Auth/SocialLogin";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name required";
    if (!form.phone) newErrors.phone = "Phone required";
    if (!form.email) newErrors.email = "Email required";
    if (!form.password) newErrors.password = "Password required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Signup Data:", form);
  };

  return (
    <AuthCardLayout title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-4">

        {["name", "phone", "email", "password"].map((field) => (
          <div key={field}>
            <input
              type={field === "password" ? "password" : "text"}
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
              className="w-full p-2 border-b outline-none focus:border-black"
              value={form[field]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
            />
            {errors[field] && (
              <p className="text-xs text-red-500">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 text-white bg-black rounded-lg hover:bg-gray-800"
        >
          Sign Up
        </button>

        <Link
          to="/"
          className="block w-full py-2 text-center border rounded-lg"
        >
          Cancel
        </Link>

        <p className="mt-4 text-sm text-center">
          Already registered?{" "}
          <Link to="/login" className="font-medium text-blue-600">
            Sign In
          </Link>
        </p>
      </form>

      <SocialLogin />
    </AuthCardLayout>
  );
};

export default Signup;
