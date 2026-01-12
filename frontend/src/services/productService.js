export const getFilteredProducts = (products, filters) => {
  let data = [...products];

  const {
    q,
    brands = [],
    rating,
    price,
    stock,
    sort,
  } = filters;

  // 🔍 SEARCH (title + brand)
  if (q) {
    const keyword = q.toLowerCase();
    data = data.filter(
      (p) =>
        p.title.toLowerCase().includes(keyword) ||
        p.brand.toLowerCase().includes(keyword)
    );
  }

  // 🏷 BRAND
  if (brands.length) {
    data = data.filter((p) => brands.includes(p.brand));
  }

  // ⭐ RATING (min)
  if (rating) {
    data = data.filter((p) => p.rating >= Number(rating));
  }

  // 📦 STOCK
  if (stock === "in") {
    data = data.filter((p) => p.inStock);
  }
  if (stock === "out") {
    data = data.filter((p) => !p.inStock);
  }

  // 💰 PRICE
  if (price) {
    const [min, max] = price;
    data = data.filter((p) => p.price >= min && p.price <= max);
  }

  // 🔃 SORT
  if (sort === "lowHigh") data.sort((a, b) => a.price - b.price);
  if (sort === "highLow") data.sort((a, b) => b.price - a.price);
  if (sort === "rating") data.sort((a, b) => b.rating - a.rating);

  return data;
};
