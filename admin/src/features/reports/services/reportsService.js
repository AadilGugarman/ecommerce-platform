const USE_MOCK = true;

export const fetchReportsApi = async () => {
  if (USE_MOCK) {
    return Promise.resolve({
      revenue: 125000,
      orders: 320,
      users: 88,
    });
  }

  // future backend
};
