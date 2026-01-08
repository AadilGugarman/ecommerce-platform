// 👉 SAME HYBRID APPROACH (Users jaisa)

const USE_MOCK = true;

const delay = (res, time = 500) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(res), time)
  );

export const updateSiteNameApi = async (data) => {
  if (USE_MOCK) {
    console.log("Mock site name:", data);
    return delay({ success: true });
  }

  // future backend
  // return api.post("/admin/settings/site-name", data);
};

export const uploadLogoApi = async (file) => {
  if (USE_MOCK) {
    console.log("Mock logo upload:", file);
    return delay({ success: true });
  }

  // future backend
  // return api.post("/admin/settings/logo", formData);
};

export const updateThemeApi = async (data) => {
  if (USE_MOCK) {
    console.log("Mock theme:", data);
    return delay({ success: true });
  }

  // future backend
  // return api.post("/admin/settings/theme", data);
};
