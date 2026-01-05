import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { TbShoppingCartHeart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

import Navbar from "./Navbar";
import Search from "../Search/Search";
import CartDrawer from "../Checkout/CartDrawer";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-gray-100 border-b-2 border-gray-300">
      {/* Top info bar */}
      <div className="container items-center justify-between hidden py-2 mx-auto text-sm border-b md:flex">
        <p>Get up to 50% off — limited time only!</p>
        <ul className="flex gap-4">
          <li>
            <Link to="/help-center">Help Center</Link>
          </li>
          <li>
            <Link to="/order-tracking">Order Tracking</Link>
          </li>
        </ul>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between pb-2 border-b-2 border-gray-200 md:border-none">
        {/* Logo + Navbar */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="./logo.jpg" alt="logo" className="w-16" />
          </Link>
          <Navbar />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Link to="/login">Login</Link> /<Link to="/signup">Register</Link>
          <Tooltip title="Wishlist">
            <IconButton>
              <StyledBadge badgeContent={4} color="secondary">
                <FaRegHeart className="text-xl" />
              </StyledBadge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton onClick={() => setCartOpen(true)}>
              <StyledBadge badgeContent={4} color="secondary">
                <TbShoppingCartHeart className="text-xl" />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </div>
      </div>

      {/* Search */}
      <Search />

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Header;
