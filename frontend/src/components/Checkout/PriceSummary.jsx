// src/components/checkout/PriceSummary.jsx

import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";

const PriceSummary = ({ ctaLabel, onCta, disabled = false }) => {
  const { totalMRP, discount, deliveryFee, finalAmount } = useCart();

  return (
    <div className="p-5 space-y-4 bg-white shadow-sm rounded-xl">
      <h3 className="text-lg font-semibold">Price Details</h3>

      <div className="flex justify-between text-sm">
        <span>Total MRP</span>
        <span>₹{totalMRP}</span>
      </div>

      <div className="flex justify-between text-sm text-green-600">
        <span>Discount</span>
        <span>-₹{discount}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Delivery</span>
        <span className={deliveryFee === 0 ? "text-green-600" : ""}>
          {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
        </span>
      </div>

      <hr />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{finalAmount}</span>
      </div>

      <Button
        fullWidth
        variant="contained"
        size="large"
        disabled={disabled}
        onClick={onCta}
      >
        {ctaLabel}
      </Button>
    </div>
  );
};

export default PriceSummary;
