import { useState } from "react";

const ChangePasswordForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  return (
    <div className="space-y-4">
      <input
        type="password"
        placeholder="Current Password"
        className="input"
        onChange={(e) =>
          setForm({ ...form, currentPassword: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="New Password"
        className="input"
        onChange={(e) =>
          setForm({ ...form, newPassword: e.target.value })
        }
      />

      <button
        onClick={() => onSubmit(form)}
        disabled={loading}
        className="btn-primary"
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordForm;
