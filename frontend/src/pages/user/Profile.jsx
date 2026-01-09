import { useAuth } from "../../components/context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="container max-w-4xl py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">My Profile</h1>

      <div className="p-6 bg-white border rounded-lg shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="block text-sm text-gray-500">Name</label>
            <input
              value={user.name}
              disabled
              className="w-full p-2 mt-1 border rounded bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500">Email</label>
            <input
              value={user.email}
              disabled
              className="w-full p-2 mt-1 border rounded bg-gray-50"
            />
          </div>

        </div>

        <div className="flex gap-4 mt-8">
          <button
            className="px-6 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            Edit Profile
          </button>

          <button
            onClick={logout}
            className="px-6 py-2 border rounded hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
