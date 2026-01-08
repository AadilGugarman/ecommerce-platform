import { useState } from "react";
import {
  updateAvatarApi,
  changePasswordApi,
} from "../services/profileService";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateAvatar = async (file) => {
    setLoading(true);
    await updateAvatarApi(file);
    setMessage("Avatar updated successfully");
    setLoading(false);
  };

  const changePassword = async (data) => {
    setLoading(true);
    await changePasswordApi(data);
    setMessage("Password changed successfully");
    setLoading(false);
  };

  return {
    updateAvatar,
    changePassword,
    loading,
    message,
  };
};
