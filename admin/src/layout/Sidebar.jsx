import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dashboard,
  Category,
  Inventory2,
  People,
  ReceiptLong,
  Image,
  Article,
  Logout,
  ExpandMore,
} from "@mui/icons-material";

const sidebarItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
  { label: "Home Slides", icon: <Image />, path: "/admin/home-slides" },
  { label: "Categories", icon: <Category />, path: "/admin/categories" },
  { label: "Products", icon: <Inventory2 />, path: "/admin/products" },
  { label: "Users", icon: <People />, path: "/admin/users" },
  { label: "Orders", icon: <ReceiptLong />, path: "/admin/orders" },
  { label: "Banners", icon: <Image />, path: "/admin/banners" },
  { label: "Blogs", icon: <Article />, path: "/admin/blogs" },
  { label: "Manage Logo", icon: <Image />, path: "/admin/logo" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-slate-900 text-slate-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5">
        {!collapsed && <span className="text-xl font-bold text-white">Admin</span>}
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

      <nav className="mt-4 space-y-1">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
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

        {/* Logout (no route) */}
        <button className="flex items-center w-full gap-3 px-4 py-3 mt-6 rounded-lg hover:bg-slate-800">
          <Logout />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
