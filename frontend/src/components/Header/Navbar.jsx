import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CategoryPanel from "./CategoryPanel";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", submenus: [] },
    {
      name: "Fashion",
      path: "/category/fashion",
      submenus: ["Men", "Women", "Kids"],
    },
    {
      name: "Electronics",
      path: "/category/electronics",
      submenus: ["Mobiles", "Laptops", "TV"],
    },
    {
      name: "Beauty",
      path: "/category/beauty",
      submenus: ["Makeup", "Skincare", "Haircare"],
    },
    {
      name: "Jewellery",
      path: "/category/jewellery",
      submenus: ["Rings", "Necklaces", "Bracelets"],
    },
    {
      name: "Wellness",
      path: "/category/wellness",
      submenus: ["Supplements", "Fitness"],
    },
    {
      name: "Bags",
      path: "/category/bags",
      submenus: ["Handbags", "Backpacks"],
    },
    {
      name: "Groceries",
      path: "/category/groceries",
      submenus: ["Vegetables", "Snacks", "Beverages"],
    },
  ];

  const hiddenOnMedium = ["Groceries", "Bags", "Wellness"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const isActiveLink = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-800";
  };

  return (
    <nav className="w-full">
      <div className="mx-auto md:container">
        <div className="flex items-center md:h-16">
          {/* Category Panel */}
          <div className="hidden md:block">
            <CategoryPanel />
          </div>

          {/* Desktop Nav */}
          <div className="items-center hidden gap-1 md:flex">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`relative group ${
                  hiddenOnMedium.includes(item.name)
                    ? "md:hidden lg:flex"
                    : ""
                }`}
              >
                {item.submenus.length > 0 ? (
                  <div className="relative">
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 text-sm font-semibold hover:text-blue-600 ${isActiveLink(
                        item.path
                      )}`}
                    >
                      {item.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </Link>

                    <div className="absolute left-0 z-50 hidden w-48 bg-white border shadow-lg group-hover:block">
                      {item.submenus.map((sub, subIndex) => {
                        const subPath = `${item.path}/${sub.toLowerCase()}`;
                        return (
                          <Link
                            key={subIndex}
                            to={subPath}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActiveLink(
                              subPath
                            )}`}
                          >
                            {sub}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-semibold hover:text-blue-600 ${isActiveLink(
                      item.path
                    )}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="relative ml-auto md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 z-50 w-full bg-white border-t md:hidden">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenus.length > 0 ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`flex justify-between items-center w-full px-3 py-3 font-semibold ${isActiveLink(
                          item.path
                        )}`}
                      >
                        <span>{item.name}</span>
                        {activeSubmenu === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      {activeSubmenu === index && (
                        <div className="ml-4">
                          {item.submenus.map((sub, subIndex) => {
                            const subPath = `${item.path}/${sub.toLowerCase()}`;
                            return (
                              <Link
                                key={subIndex}
                                to={subPath}
                                onClick={closeMenu}
                                className={`block px-3 py-2 text-sm ${isActiveLink(
                                  subPath
                                )}`}
                              >
                                {sub}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-3 py-3 font-semibold ${isActiveLink(
                        item.path
                      )}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
