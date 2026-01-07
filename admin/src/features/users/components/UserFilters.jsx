import { TextField, Select, MenuItem } from "@mui/material";

const UserFilters = ({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="flex gap-4">
      <TextField
        size="small"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        size="small"
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
      >
        <MenuItem value="All">All Roles</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="Manager">Manager</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </Select>

      <Select
        size="small"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <MenuItem value="All">All Status</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Blocked">Blocked</MenuItem>
      </Select>
    </div>
  );
};

export default UserFilters;
