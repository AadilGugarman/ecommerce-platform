// features/users/services/userService.js

export const fetchUsers = async () => {
  // TODO: replace with real API
  return [
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Manager User",
      email: "manager@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Normal User",
      email: "user@example.com",
      role: "User",
      status: "Blocked",
    },
  ];
};

// placeholders for future backend
export const createUser = async () => {};
export const updateUserApi = async () => {};
export const deleteUserApi = async () => {};



// permissions config (frontend RBAC)
export const ROLE_PERMISSIONS = {
  Admin: ["create", "edit", "delete", "block", "view_logs"],
  Manager: ["edit", "block"],
  User: [],
};

// mock current logged-in user
export const getCurrentUser = () => ({
  id: 999,
  name: "Admin User",
  role: "Admin",
});
