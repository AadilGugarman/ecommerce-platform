import AdminTable from "../components/tables/AdminTable";

const Users = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Users
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage registered users and their access
          </p>
        </div>

        {/* Primary Action (UI only) */}
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Add User
        </button>
      </section>

      {/* Users Table */}
      <AdminTable
        title="Users List"
        columns={[
          "Name",
          "Email",
          "Role",
          "Status",
          "Joined Date",
          "Actions",
        ]}
      />
    </div>
  );
};

export default Users;
