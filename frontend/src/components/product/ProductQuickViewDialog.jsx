import React, { useState } from "react";
import {
  Dialog,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductQuickViewDialog = ({ open, onClose, product }) => {
  const [size, setSize] = useState("null");
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 3,
          overflow: "hidden", // 🚫 no popup scroll
        },
      }}
    >
      {/* Close */}
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 12, right: 12 }}
      >
        <CloseIcon />
      </IconButton>

      {/* ================= CONTENT ================= */}
      <Box>
        <Grid container spacing={4} alignItems="center">
          {/* LEFT: IMAGE */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "#f5f5f5",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT: INFO */}
          <Grid item xs={12} md={7}>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <Typography variant="h6" fontWeight={600}>
                {product.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Urban Vogue • 124 Reviews
              </Typography>

              <Rating value={4.5} precision={0.5} readOnly />

              {/* Price */}
              <Box display="flex" alignItems="center" gap={2}>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                  }}
                >
                  ₹1,999
                </Typography>
                <Typography variant="h6" color="primary" fontWeight={600}>
                  {product.price}
                </Typography>
                <Typography variant="caption" color="success.main">
                  In Stock
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                Premium quality fashion product designed for everyday comfort
                and modern styling.
              </Typography>

              {/* Size */}
              <Box>
                <Typography variant="body2" mb={0.5}>
                  Size
                </Typography>
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  size="small"
                  onChange={(e, v) => v && setSize(v)}
                >
                  {["S", "M", "L", "XL"].map((s) => (
                    <ToggleButton key={s} value={s}>
                      {s}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              {/* Quantity */}
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton onClick={() => setQty(Math.max(1, qty - 1))}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{qty}</Typography>
                <IconButton onClick={() => setQty(qty + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              {/* Actions */}
              <Box display="flex" alignItems="center" gap={2} mt={1}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ flex: 1 }}
                >
                  Add to Cart
                </Button>

                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>

                <IconButton>
                  <CompareArrowsIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ProductQuickViewDialog;
