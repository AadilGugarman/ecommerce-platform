// features/users/components/UserStatusToggle.jsx

import { Switch } from "@mui/material";

const UserStatusToggle = ({ status, onToggle }) => {
  return (
    <Switch
      checked={status === "Active"}
      onChange={onToggle}
      color="success"
    />
  );
};

export default UserStatusToggle;
