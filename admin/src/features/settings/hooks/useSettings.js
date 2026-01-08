import { useState } from "react";
import {
  updateSiteNameApi,
  uploadLogoApi,
  updateThemeApi,
} from "../services/settingsService";

export const useSettings = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateSiteName = async (name) => {
    setLoading(true);
    await updateSiteNameApi({ name });
    setMessage("Site name updated");
    setLoading(false);
  };

  const uploadLogo = async (file) => {
    setLoading(true);
    await uploadLogoApi(file);
    setMessage("Logo uploaded");
    setLoading(false);
  };

  const updateTheme = async (theme) => {
    setLoading(true);
    await updateThemeApi({ theme });
    setMessage("Theme updated");
    setLoading(false);
  };

  return {
    updateSiteName,
    uploadLogo,
    updateTheme,
    loading,
    message,
  };
};
