// src/components/context/cartUtils.js

export const calculateCartTotals = (cartItems) => {
  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = totalMRP - totalPrice;

  const deliveryFee = totalPrice > 1000 ? 0 : 99;

  const finalAmount = totalPrice + deliveryFee;

  return {
    totalMRP,
    totalPrice,
    discount,
    deliveryFee,
    finalAmount,
  };
};
