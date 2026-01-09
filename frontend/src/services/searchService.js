// 🔥 backend-ready autocomplete
export const fetchSearchSuggestions = async (query) => {
  if (!query) return [];

  // MOCK (replace with API later)
  const allProducts = [
    "Laptop",
    "Laptop Stand",
    "Laptop Bag",
    "Headphones",
    "Wireless Headphones",
    "Shoes",
    "Sports Shoes",
    "Smart Watch",
    "Mobile Phone",
    "Mobile Charger",
  ];

  return allProducts.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};
// Later replace with real Api:
// return axios.get(`/api/search/suggest?q=${query}`);
