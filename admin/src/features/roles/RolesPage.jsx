import { useRoles } from "./hooks/useRoles";

const RolesPage = () => {
  const { roles } = useRoles();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Roles & Permissions
      </h1>

      {roles.map((role) => (
        <div key={role.id} className="card">
          <h3>{role.name}</h3>
          <p>{role.permissions.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default RolesPage;
