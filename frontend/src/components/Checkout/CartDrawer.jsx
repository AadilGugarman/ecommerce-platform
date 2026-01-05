import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { MdClose, MdDeleteOutline } from "react-icons/md";

const CartDrawer = ({ open, onClose }) => {
  // TEMP cart data (later replace with CartContext)
  const cartItems = [
    {
      id: 1,
      title: "Oversized Cotton T-Shirt",
      price: 1299,
      qty: 1,
      image: "https://picsum.photos/80/80",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 },
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        },
      }}
    >
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <Typography fontWeight={600}>
          Shopping Cart ({cartItems.length})
        </Typography>
        <IconButton onClick={onClose}>
          <MdClose />
        </IconButton>
      </Box>

      {/* ================= CART ITEMS ================= */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <Stack spacing={2}>
          {cartItems.map((item) => (
            <Box key={item.id}>
              <Stack direction="row" spacing={2} alignItems="center">
                <img
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  style={{ borderRadius: 8 }}
                />

                <Box flex={1}>
                  <Typography fontSize={14} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={13} color="text.secondary">
                    {item.qty} × ₹{item.price}
                  </Typography>
                </Box>

                <IconButton size="small">
                  <MdDeleteOutline />
                </IconButton>
              </Stack>

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </Stack>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={500}>Subtotal</Typography>
            <Typography fontWeight={600}>₹{subtotal}</Typography>
          </Stack>

          {/* View Cart (optional later link) */}
          <Button variant="outlined" fullWidth>
            View Cart
          </Button>

          {/* ✅ CHECKOUT LINKED */}
          <Link to="/checkout/cart" onClick={onClose}>
            <Button variant="contained" fullWidth>
              Checkout
            </Button>
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
