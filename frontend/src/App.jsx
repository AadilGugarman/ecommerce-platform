import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import OTPVerification from "./pages/Auth/OTPVerification";
import ResetPassword from "./pages/Auth/ResetPassword";

// Checkout Pages
import CartPage from "./pages/Checkout/CartPage";
import AddressPage from "./pages/checkout/AddressPage";
import PaymentPage from "./pages/checkout/PaymentPage";
import OrderSuccess from "./pages/Checkout/OrderSuccess";

// Layouts
import HomeLayout from "./Layouts/HomeLayout";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";

// Context Providers
import { CartProvider } from "./components/context/CartContext";
import { CheckoutProvider } from "./components/context/CheckoutContext";

import "./index.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <Routes>

          {/* 🏠 Home */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* 📦 Main (Category + Product + Checkout) */}
          <Route element={<MainLayout />}>

            {/* Category */}
            <Route path="/:category" element={<CategoryPage />} />

            {/* Product Detail */}
            <Route
              path="/product/:category/:index"
              element={<ProductDetail />}
            />

            {/* 🧾 Checkout Flow */}
            <Route path="/checkout/cart" element={<CartPage />} />
            <Route path="/checkout/address" element={<AddressPage />} />
            <Route path="/checkout/payment" element={<PaymentPage />} />
            <Route path="/checkout/success" element={<OrderSuccess />} />

          </Route>

          {/* 🔐 Auth (No header/footer) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

        </Routes>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
