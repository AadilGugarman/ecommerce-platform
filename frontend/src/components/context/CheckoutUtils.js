// src/components/context/checkoutUtils.js

export const initialCheckoutState = {
  // 📍 All saved addresses
  addresses: [
    {
      id: 1,
      name: "Aadil Khan",
      phone: "9876543210",
      street: "MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      label: "Home", // Home | Office
    },
  ],

  // ✅ Currently selected address
  selectedAddressId: null,

  // 💳 Selected payment method
  paymentMethod: "",
  upiApp: "",
  upiId: "",

  // 🧾 Order summary snapshot
  orderSummary: {
    totalMRP: 0,
    discount: 0,
    deliveryFee: 0,
    finalAmount: 0,
  },
};
