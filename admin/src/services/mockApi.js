// src/services/mockApi.js
import { productsResponse } from "../features/products/products.data";

export const getProducts = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(productsResponse), 800)
  );

export const getDashboardStats = () =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          users: 1200,
          orders: 430,
          products: 86,
          categories: 12,
        }),
      600
    )
  );
