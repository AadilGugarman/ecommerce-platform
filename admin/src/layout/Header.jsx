import React, { useState } from "react";
import { Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Menu, MenuItem } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
