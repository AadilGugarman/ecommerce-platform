const USE_MOCK = true;

export const fetchActivityLogsApi = async () => {
  if (USE_MOCK) {
    return Promise.resolve([
      {
        id: 1,
        action: "User Created",
        by: "Admin",
      },
      {
        id: 2,
        action: "Order Updated",
        by: "Editor",
      },
    ]);
  }
};
