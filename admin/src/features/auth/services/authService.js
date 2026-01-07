// features/auth/services/authService.js

export const loginApi = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve({
          user: {
            id: 1,
            name: "Admin User",
            email,
            role: "Admin",
          },
          token: "mock-jwt-token-123",
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 800);
  });
};

export const registerApi = async ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password.length >= 6) {
        resolve({ success: true });
      } else {
        reject(new Error("Invalid registration data"));
      }
    }, 800);
  });
};

export const logoutApi = async () => {
  return Promise.resolve(true);
};
