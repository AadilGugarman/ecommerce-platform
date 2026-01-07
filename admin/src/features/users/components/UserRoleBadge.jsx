// features/users/components/UserRoleBadge.jsx

import { Chip } from "@mui/material";

const roleColor = {
  Admin: "error",
  Manager: "warning",
  User: "default",
};

const UserRoleBadge = ({ role }) => {
  return (
    <Chip
      size="small"
      label={role}
      color={roleColor[role]}
    />
  );
};

export default UserRoleBadge;
