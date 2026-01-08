import { useEffect, useState } from "react";
import {
  loginApi,
  registerApi,
  logoutApi,
} from "../services/authService";

const STORAGE_KEY = "auth_data";
const REMEMBER_KEY = "remember_me";

// rate-limit config
const MAX_ATTEMPTS = 5;
const LOCK_SECONDS = 30;

export const useAuth = () => {
  // core auth state
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // rate-limit
  const [attempts, setAttempts] = useState(0);
  const [lockTime, setLockTime] = useState(0);

  // otp (mock)
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  // 🔄 restore auth (remember me aware)
  useEffect(() => {
    try {
      const remember = localStorage.getItem(REMEMBER_KEY);
      const stored = remember
        ? localStorage.getItem(STORAGE_KEY)
        : sessionStorage.getItem(STORAGE_KEY);

      if (stored) {
        const data = JSON.parse(stored);
        setUser(data.user);
        setToken(data.token);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  // ⏳ rate-limit countdown
  useEffect(() => {
    if (lockTime === 0) return;

    const timer = setInterval(() => {
      setLockTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [lockTime]);

  // 🔐 normal login (supports remember me)
  const login = async (credentials, remember = false) => {
    setLoading(true);
    setError("");
    try {
      const res = await loginApi(credentials);
      setUser(res.user);
      setToken(res.token);

      if (remember) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
        localStorage.setItem(REMEMBER_KEY, "1");
        sessionStorage.removeItem(STORAGE_KEY);
      } else {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(res));
        localStorage.removeItem(REMEMBER_KEY);
        localStorage.removeItem(STORAGE_KEY);
      }

      return true;
    } catch (err) {
      setError(err.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 🔒 login with rate-limit UX
  const loginWithRateLimit = async (credentials, remember = false) => {
    if (lockTime > 0) {
      setError(`Too many attempts. Try again in ${lockTime}s`);
      return false;
    }

    const success = await login(credentials, remember);

    if (!success) {
      const next = attempts + 1;
      setAttempts(next);

      if (next >= MAX_ATTEMPTS) {
        setLockTime(LOCK_SECONDS);
        setAttempts(0);
      }
    } else {
      setAttempts(0);
    }

    return success;
  };

  // 📩 send OTP (mock)
  const sendOtp = async (email) => {
    if (!email) return false;
    setOtpSent(true);
    setOtpValue("123456"); // mock OTP
    console.log("OTP (mock): 123456");
    return true;
  };

  // ✅ verify OTP
  const verifyOtp = async (otp) => {
    return otp === otpValue;
  };

  // 📝 register
  const register = async (data) => {
    setLoading(true);
    setError("");
    try {
      await registerApi(data);
      return true;
    } catch (err) {
      setError(err.message || "Register failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 🚪 logout
  const logout = async () => {
    await logoutApi();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(REMEMBER_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setToken(null);
  };

  return {
    // core
    user,
    token,
    loading,
    error,

    // auth
    login,
    loginWithRateLimit,
    register,
    logout,

    // rate-limit
    lockTime,

    // otp
    sendOtp,
    verifyOtp,
    otpSent,
  };
};
