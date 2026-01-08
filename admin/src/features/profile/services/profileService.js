// 👉 HYBRID SERVICE (Users jaisa)
// 👉 Abhi mock, backend aaye to yahin change

const USE_MOCK = true;

// fake delay helper
const delay = (res, time = 500) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(res), time)
  );

export const updateAvatarApi = async (file) => {
  if (USE_MOCK) {
    console.log("Mock avatar upload:", file);
    return delay({ success: true });
  }

  // future backend
  // return api.post("/admin/profile/avatar", formData);
};

export const changePasswordApi = async (data) => {
  if (USE_MOCK) {
    console.log("Mock password change:", data);
    return delay({ success: true });
  }

  // future backend
  // return api.post("/admin/profile/change-password", data);
};
