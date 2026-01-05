// src/components/context/CheckoutContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { initialCheckoutState } from "./CheckoutUtils.js";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(initialCheckoutState);

  /* ======================
     ADDRESS HANDLING
  ====================== */

  // ✅ Select address
  const selectAddress = (id) => {
    setCheckout((prev) => ({
      ...prev,
      selectedAddressId: id,
    }));
  };

  // ❌ Delete address
  const deleteAddress = (id) => {
    setCheckout((prev) => ({
      ...prev,
      addresses: prev.addresses.filter((a) => a.id !== id),
      selectedAddressId:
        prev.selectedAddressId === id ? null : prev.selectedAddressId,
    }));
  };

  // ➕ Add / Edit address
  const saveAddress = (address) => {
    setCheckout((prev) => {
      const exists = prev.addresses.find((a) => a.id === address.id);

      if (exists) {
        return {
          ...prev,
          addresses: prev.addresses.map((a) =>
            a.id === address.id ? address : a
          ),
        };
      }

      return {
        ...prev,
        addresses: [...prev.addresses, address],
      };
    });
  };

  /* ======================
     PAYMENT HANDLING
  ====================== */

  // ✅ Set payment method
  // 👉 UPI se bahar jaate hi UPI data reset (clean UX)
  const setPaymentMethod = (method) => {
    setCheckout((prev) => ({
      ...prev,
      paymentMethod: method,
      ...(method !== "UPI" && { upiApp: "", upiId: "" }),
    }));
  };

  // ✅ Set UPI App
  const setUpiApp = (app) => {
    setCheckout((prev) => ({
      ...prev,
      upiApp: app,
    }));
  };

  // ✅ Set UPI ID (optional)
  const setUpiId = (upiId) => {
    setCheckout((prev) => ({
      ...prev,
      upiId,
    }));
  };

  /* ======================
     PREMIUM UX
     Auto-select last payment
  ====================== */

  // 🔁 Load last used payment
  useEffect(() => {
    const saved = localStorage.getItem("lastPayment");
    if (saved) {
      setCheckout((prev) => ({
        ...prev,
        ...JSON.parse(saved),
      }));
    }
  }, []);

  // 💾 Save last payment
  useEffect(() => {
    localStorage.setItem(
      "lastPayment",
      JSON.stringify({
        paymentMethod: checkout.paymentMethod,
        upiApp: checkout.upiApp,
      })
    );
  }, [checkout.paymentMethod, checkout.upiApp]);

  /* ======================
     PROVIDER
  ====================== */

  return (
    <CheckoutContext.Provider
      value={{
        checkout,

        // address
        selectAddress,
        deleteAddress,
        saveAddress,

        // payment
        setPaymentMethod,
        setUpiApp,
        setUpiId,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
