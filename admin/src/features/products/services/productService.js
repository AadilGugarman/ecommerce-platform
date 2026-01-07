// features/products/services/productService.js

export const mockCategories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home" },
];

export const mockProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 999,
    sales: 120,
    stock: 35,
    rating: 4,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Keyboard",
    category: "Electronics",
    price: 1500,
    sales: 80,
    stock: 12,
    rating: 5,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Headphones",
    category: "Accessories",
    price: 3999,
    sales: 200,
    stock: 20,
    rating: 5,
    image: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    name: "USB Cable",
    category: "Accessories",
    price: 299,
    sales: 300,
    stock: 100,
    rating: 4,
    image: "https://via.placeholder.com/40",
  },
];

// future ready
export const fetchProducts = async () => {
  return mockProducts;
};
