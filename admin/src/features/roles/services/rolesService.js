const USE_MOCK = true;

export const fetchRolesApi = async () => {
  if (USE_MOCK) {
    return Promise.resolve([
      {
        id: 1,
        name: "Admin",
        permissions: ["all"],
      },
      {
        id: 2,
        name: "Editor",
        permissions: ["products", "orders"],
      },
    ]);
  }
};
