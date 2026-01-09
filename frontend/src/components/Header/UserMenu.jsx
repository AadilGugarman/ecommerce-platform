import { Avatar, Menu, MenuItem, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // 🔒 SAFETY: agar user hi nahi hai → kuch render mat karo
  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true }); // 🔥 redirect after logout
  };

  return (
    <>
      <Avatar
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ cursor: "pointer", width: 36, height: 36 }}
      >
        {user.name?.[0]?.toUpperCase()}
      </Avatar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem disabled>{user.name}</MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
