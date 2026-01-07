// features/auth/hooks/useAuth.js

import { useEffect, useState } from "react";
import {
  loginApi,
  registerApi,
  logoutApi,
} from "../services/authService";

const STORAGE_KEY = "auth_data";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      setUser(data.user);
      setToken(data.token);
    }
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    setError("");
    try {
      const res = await loginApi(credentials);
      setUser(res.user);
      setToken(res.token);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    setLoading(true);
    setError("");
    try {
      await registerApi(data);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await logoutApi();
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setToken(null);
  };

  return {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
  };
};
