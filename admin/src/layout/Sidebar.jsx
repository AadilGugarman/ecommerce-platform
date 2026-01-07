import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/icons-material";

const sidebarItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "dashboard" },
  { label: "Home Slides", icon: <Image />, path: "home-slides" },
  { label: "Categories", icon: <Category />, path: "categories" },
  { label: "Products", icon: <Inventory2 />, path: "products" },
  { label: "Users", icon: <People />, path: "users" },
  { label: "Orders", icon: <ReceiptLong />, path: "orders" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative h-screen overflow-hidden bg-slate-900 text-slate-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        {!collapsed && (
          <span className="text-xl font-bold text-white">
            Admin
          </span>
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

      {/* Main menu */}
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
            {!collapsed && (
              <span className="text-sm">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="absolute left-0 right-0 bottom-14">
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `flex items-center w-full px-4 py-3 gap-3 rounded-lg transition
            ${
              isActive
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Settings />
          {!collapsed && (
            <span className="text-sm">Settings</span>
          )}
        </NavLink>
      </div>

      {/* Logout */}
      <div className="absolute left-0 right-0 bottom-2">
        <button className="flex items-center w-full gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          <Logout />
          {!collapsed && (
            <span className="text-sm">Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
