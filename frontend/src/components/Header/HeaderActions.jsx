import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { TbShoppingCartHeart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

import CartDrawer from "../Checkout/CartDrawer";
import UserMenu from "./UserMenu";
import { useAuth } from "../context/AuthContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const HeaderActions = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <div className="flex items-center gap-2">
        {!user ? (
          <>
            <Link to="/login" className="text-sm font-medium hover:text-blue-600">
              Login
            </Link>
            /
            <Link
              to="/signup"
              className="text-sm font-medium hover:text-blue-600"
            >
              Register
            </Link>
          </>
        ) : (
          <UserMenu />
        )}

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

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default HeaderActions;
