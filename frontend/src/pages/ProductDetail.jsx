import React, { useState } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useWishlist } from "../components/context/WishlistContext"; // ✅ ADDED

import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "../data/dummyData";



const ProductDetail = () => {
  const { category, index } = useParams();

  const { toggleWishlist, isInWishlist } = useWishlist(); // ✅ ADDED

  const [activeSize, setActiveSize] = useState("null");
  const [qty, setQty] = useState(1);

  const productsMap = {
    fashion: fashionProducts,
    electronics: electronicsProducts,
    beauty: beautyProducts,
  };

  const product = productsMap[category]?.[index];

  // Safety check
  if (!product) {
    return <p className="p-10 text-center">Product not found</p>;
  }

  // Discount calculation
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="w-full px-4 py-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {/* LEFT */}
        <div>
          <div className="overflow-hidden bg-gray-100 rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full max-h-[420px] sm:max-h-[520px]"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold sm:text-2xl">
            {product.title}
          </h1>

          <p className="text-sm text-gray-500">
            Brand: {product.brand}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold">₹{product.price}</span>
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
            <span className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">
              {discount}% OFF
            </span>
          </div>

          {/* Stock */}
          <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full w-fit">
            {product.stock}
          </span>

          {/* Description */}
          <p className="text-sm text-gray-600">
            {product.description}
          </p>

          {/* Size */}
          <div>
            <p className="mb-2 text-sm font-medium">Select Size</p>
            <div className="flex gap-2">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-4 py-2 text-sm border rounded-lg
                    ${
                      activeSize === size
                        ? "bg-black text-white"
                        : "hover:border-black"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="mb-2 text-sm font-medium">Quantity</p>
            <div className="flex items-center border rounded-lg w-fit">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-4 sm:flex-row">
            <button className="flex-1 py-3 text-white bg-black rounded-lg">
              Add to Cart
            </button>

            {/* ✅ WISHLIST FIX ONLY */}
            <button
              onClick={() => toggleWishlist(product)}
              className="p-3 border rounded-lg"
            >
              <FaHeart
                className={
                  isInWishlist(product.id)
                    ? "text-red-500"
                    : ""
                }
              />
            </button>

            <button className="p-3 border rounded-lg">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
