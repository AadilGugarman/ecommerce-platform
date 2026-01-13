import React, { useMemo, useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidebar from "../components/product/Sidebar";
import { getFilteredProducts } from "../services/productService";
import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "../data/dummyData";

import { FaSortAmountDown, FaFilter } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // ✅ UPDATED
import { IoClose } from "react-icons/io5";
import { FiEye } from "react-icons/fi";

import ProductQuickViewDialog from "../components/Product/ProductQuickViewDialog";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useWishlist } from "../components/context/WishlistContext"; // ✅ ADDED

const CategoryPage = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [visibleCount, setVisibleCount] = useState(12);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const [openQuickView, setOpenQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { toggleWishlist, isInWishlist } = useWishlist(); // ✅ ADDED

  const productsMap = {
    fashion: fashionProducts,
    electronics: electronicsProducts,
    beauty: beautyProducts,
  };

  /* 🔹 READ FILTERS FROM URL */
  const filters = {
    q: searchParams.get("q"),
    brands: searchParams.get("brand")?.split(",") || [],
    rating: searchParams.get("rating"),
    stock: searchParams.get("stock"),
    price: searchParams.get("price")
      ? searchParams.get("price").split("-").map(Number)
      : null,
    sort: searchParams.get("sort") || "recommended",
  };

  /* 🔹 FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {
    return getFilteredProducts(
      productsMap[category] || [],
      filters
    );
  }, [category, searchParams.toString()]);

  /* 🔹 RESET SCROLL ON FILTER CHANGE */
  useEffect(() => {
    setVisibleCount(12);
  }, [searchParams.toString()]);

  return (
    <div className="flex items-start justify-center w-full p-3">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden w-1/4 md:flex">
        <Sidebar />
      </div>

      {/* PRODUCTS */}
      <div className="w-full md:w-3/4">
        <Breadcrumbs />

        <h1 className="mb-2 text-lg font-semibold capitalize">
          {category}
        </h1>

        <div
          id="product-grid"
          className="h-[550px] overflow-auto bg-gray-100 p-2 border pb-12"
        >
          <InfiniteScroll
            dataLength={visibleCount}
            next={() =>
              setVisibleCount((v) =>
                Math.min(v + 12, filteredProducts.length)
              )
            }
            hasMore={visibleCount < filteredProducts.length}
            loader={<p className="py-2 text-center">Loading...</p>}
            scrollableTarget="product-grid"
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {filteredProducts
                .slice(0, visibleCount)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${category}/${item.id}`}
                    className="relative flex flex-col overflow-hidden bg-white rounded shadow group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full"
                    />

                    {/* HOVER ACTIONS */}
                    <div className="absolute z-10 flex flex-col gap-2 opacity-0 top-2 right-2 group-hover:opacity-100">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProduct(item);
                          setOpenQuickView(true);
                        }}
                        className="p-2 text-white bg-black rounded-full"
                      >
                        <FiEye />
                      </button>

                      <button
                        onClick={(e) => e.preventDefault()}
                        className="p-2 text-white bg-blue-500 rounded-full"
                      >
                        <TbShoppingCartPlus />
                      </button>

                      {/* ✅ WISHLIST FIX ONLY */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(item);
                        }}
                        className="p-2 text-white bg-red-500 rounded-full"
                      >
                        {isInWishlist(item.id) ? (
                          <IoMdHeart />
                        ) : (
                          <IoMdHeartEmpty />
                        )}
                      </button>
                    </div>

                    <div className="p-2">
                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹{item.price}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>

      {/* MOBILE SORT / FILTER BAR */}
      <div className="fixed bottom-0 left-0 z-50 flex justify-around w-full py-3 bg-white border-t md:hidden">
        <button onClick={() => setOpenSort(true)}>
          <FaSortAmountDown />
          <p className="text-xs">Sort</p>
        </button>
        <button onClick={() => setOpenSidebar(true)}>
          <FaFilter />
          <p className="text-xs">Filter</p>
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex-1 p-3 overflow-auto">
            <Sidebar />
          </div>

          <div className="p-3 border-t">
            <button
              onClick={() => setOpenSidebar(false)}
              className="flex items-center justify-center w-full gap-2 py-3 text-white bg-blue-600 rounded-lg"
            >
              Apply & Close <IoClose />
            </button>
          </div>
        </div>
      )}

      {/* SORT MODAL */}
      {openSort && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/50">
          <div className="w-full p-5 bg-white rounded-t-2xl">
            <h2 className="mb-4 text-lg font-semibold">
              Sort by
            </h2>

            <ul className="space-y-4">
              {[
                { key: "recommended", label: "Recommended" },
                { key: "lowHigh", label: "Price: Low to High" },
                { key: "highLow", label: "Price: High to Low" },
                { key: "rating", label: "Customer Rating" },
              ].map((item) => (
                <li
                  key={item.key}
                  className="cursor-pointer hover:font-medium"
                  onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.set("sort", item.key);
                    setSearchParams(next);
                    setOpenSort(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpenSort(false)}
              className="w-full py-3 mt-6 text-white bg-gray-800 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ProductQuickViewDialog
        open={openQuickView}
        onClose={() => setOpenQuickView(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default CategoryPage;
