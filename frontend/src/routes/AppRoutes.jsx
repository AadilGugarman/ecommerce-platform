import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/user/Profile";
import Orders from "../pages/user/Orders";
import SearchResults from "../pages/search/SearchResults";

/* Auth Pages */
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import OTPVerification from "../pages/Auth/OTPVerification";
import ResetPassword from "../pages/Auth/ResetPassword";

/* Checkout Pages */
import CartPage from "../pages/Checkout/CartPage";
import AddressPage from "../pages/checkout/AddressPage";
import PaymentPage from "../pages/checkout/PaymentPage";
import OrderSuccess from "../pages/Checkout/OrderSuccess";

/* Layouts */
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";

/* Route Guards */
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🏠 Home */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      {/* 📦 Main (Category + Product) */}
      <Route element={<MainLayout />}>
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="/product/:category/:index" element={<ProductDetail />} />
         <Route path="/search" element={<SearchResults />} />
      </Route>

      {/* 🔐 PROTECTED (Checkout) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/checkout/cart" element={<CartPage />} />
          <Route path="/checkout/address" element={<AddressPage />} />
          <Route path="/checkout/payment" element={<PaymentPage />} />
          <Route path="/checkout/success" element={<OrderSuccess />} />
        </Route>
      </Route>

      {/* 🔓 AUTH (Public Only) */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
