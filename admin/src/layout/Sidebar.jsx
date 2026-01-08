import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Dashboard,
  Category,
  Inventory2,
  People,
  ReceiptLong,
  Image,
  Logout,
  ExpandMore,
  Settings,
  BarChart,
  Security,
  ListAlt,
  Person,
  LocalOffer,
} from "@mui/icons-material";
import { useAuth } from "../features/auth/hooks/useAuth";

const sidebarItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "dashboard" },
  { label: "Profile", icon: <Person />, path: "profile" },

  { label: "Products", icon: <Inventory2 />, path: "products" },
  { label: "Categories", icon: <Category />, path: "categories" },
  { label: "Orders", icon: <ReceiptLong />, path: "orders" },
  { label: "Users", icon: <People />, path: "users" },

  { label: "Reports", icon: <BarChart />, path: "reports" },
  { label: "Roles & Permissions", icon: <Security />, path: "roles" },
  { label: "Activity Logs", icon: <ListAlt />, path: "activity-logs" },
  { label: "Coupons", icon: <LocalOffer />, path: "coupons" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside
      className={`relative h-screen overflow-hidden bg-slate-900 text-slate-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        {!collapsed && (
          <span className="text-xl font-bold text-white">Admin</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-white"
        >
          <ExpandMore
            className={`transition-transform ${
              collapsed ? "-rotate-90" : "rotate-90"
            }`}
          />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 space-y-1">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center w-full px-4 py-3 gap-3 transition rounded-lg
              ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Settings */}
      <div className="absolute left-0 right-0 bottom-14">
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `flex items-center w-full px-4 py-3 gap-3 rounded-lg transition
            ${isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"}`
          }
        >
          <Settings />
          {!collapsed && <span className="text-sm">Settings</span>}
        </NavLink>
      </div>

      {/* Logout */}
      <div className="absolute left-0 right-0 bottom-2">
        <button
          onClick={handleLogout}
          className="flex items-center w-full gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
        >
          <Logout />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
