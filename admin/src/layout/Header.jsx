import React, { useState } from "react";
import { Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setAnchorEl(null);
    navigate("/login", { replace: true });
  };

  // ✅ ADD THESE TWO HANDLERS
  const goToProfile = () => {
    setAnchorEl(null);
    navigate("/admin/profile");
  };

  const goToSettings = () => {
    setAnchorEl(null);
    navigate("/admin/settings");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>

      <div className="flex items-center gap-6">
        <Badge badgeContent={3} color="primary">
          <Notifications className="cursor-pointer text-slate-600" />
        </Badge>

        <ShoppingCart className="cursor-pointer text-slate-600" />

        <Avatar
          onClick={(e) => setAnchorEl(e.currentTarget)}
          className="cursor-pointer"
          src="https://i.pravatar.cc/300"
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {/* ✅ NOW WORKING */}
          <MenuItem onClick={goToProfile}>Profile</MenuItem>
          <MenuItem onClick={goToSettings}>Settings</MenuItem>

          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
