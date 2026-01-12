const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const brands = {
  fashion: ["Nike", "Adidas", "Zara", "Puma"],
  electronics: ["Apple", "Samsung", "Sony", "Boat"],
  beauty: ["Lakme", "Maybelline", "Loreal"],
};

const ratings = [3.5, 4, 4.2, 4.5, 4.8];

const createProducts = (count, category, basePrice) =>
  Array.from({ length: count }).map((_, i) => ({
    id: `${category}-${i + 1}`,
    title: `${category} Product ${i + 1}`,
    category,
    brand: randomFrom(brands[category]),
    price: basePrice + Math.floor(Math.random() * 2000),
    rating: randomFrom(ratings),
    reviews: Math.floor(Math.random() * 500),
    inStock: Math.random() > 0.2,
    image: `https://picsum.photos/300/300?random=${category}${i}`,
    createdAt: new Date(
      Date.now() - Math.random() * 10000000000
    ).toISOString(),
  }));

export const fashionProducts = createProducts(40, "fashion", 799);
export const electronicsProducts = createProducts(40, "electronics", 4999);
export const beautyProducts = createProducts(40, "beauty", 399);
