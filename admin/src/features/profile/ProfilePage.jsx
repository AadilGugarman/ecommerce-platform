import { useProfile } from "./hooks/useProfile";

const ProfilePage = () => {
  const {
    updateAvatar,
    changePassword,
    loading,
    message,
  } = useProfile();

  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-2xl font-semibold">
        Profile
      </h1>

      {/* Avatar */}
      <div>
        <label className="block mb-1 text-sm">
          Update Avatar
        </label>
        <input
          type="file"
          onChange={(e) =>
            updateAvatar(e.target.files[0])
          }
        />
      </div>

      {/* Password */}
      <div>
        <button
          disabled={loading}
          onClick={() =>
            changePassword({
              currentPassword: "old",
              newPassword: "new",
            })
          }
          className="px-4 py-2 text-white bg-indigo-600 rounded"
        >
          Change Password
        </button>
      </div>

      {message && (
        <p className="text-green-600">
          {message}
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
