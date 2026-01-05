import React, { useState } from "react";
import Sidebar from "../components/product/Sidebar";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useParams, Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  FaSortAmountDown,
  FaFilter,
} from "react-icons/fa";

import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "../data/dummyData";

// ✅ Quick View Modal
import ProductQuickViewDialog from "../components/Product/ProductQuickViewDialog";

const CategoryPage = () => {
  const { category } = useParams();

  const productsMap = {
    fashion: fashionProducts,
    electronics: electronicsProducts,
    beauty: beautyProducts,
  };

  const products = productsMap[category] || [];

  const [visibleCount, setVisibleCount] = useState(12);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  // ✅ Quick View state
  const [openQuickView, setOpenQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex items-start justify-center w-full p-3">
      {/* Sidebar */}
      <div className="hidden w-1/4 md:flex col1">
        <Sidebar />
      </div>

      {/* Products */}
      <div className="w-full md:w-3/4 col2">
        <h1 className="capitalize">{category}</h1>

        <div
          id="product-grid"
          className="custom-scrollbar h-[550px] overflow-auto bg-gray-100 p-2 border pb-12"
        >
          <InfiniteScroll
            dataLength={visibleCount}
            next={() =>
              setVisibleCount((prev) =>
                Math.min(prev + 12, products.length)
              )
            }
            hasMore={visibleCount < products.length}
            loader={<h4 className="py-2 text-center">Loading...</h4>}
            scrollableTarget="product-grid"
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {products.slice(0, visibleCount).map((item, idx) => (
                <Link
                  key={idx}
                  to={`/product/${category}/${idx}`}
                  className="relative flex flex-col overflow-hidden bg-white rounded shadow group"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-auto"
                  />

                  {/* 🔥 PROFESSIONAL HOVER ACTIONS */}
                  <div className="absolute z-10 flex flex-col gap-2 transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100">

                    {/* Quick View (hover only) */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedProduct(item);
                        setOpenQuickView(true);
                      }}
                      className="p-2 text-white bg-black rounded-full hover:bg-gray-800"
                    >
                      <FiEye />
                    </button>

                    {/* Add to Cart */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-400"
                    >
                      <TbShoppingCartPlus />
                    </button>

                    {/* Wishlist */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="p-2 text-white bg-red-500 rounded-full hover:bg-red-400"
                    >
                      <IoMdHeartEmpty />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col p-2">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>

      {/* Mobile Sort / Filter */}
      <div className="fixed bottom-0 left-0 z-50 flex items-center justify-around w-full py-3 bg-white border-t shadow md:hidden">
        <button onClick={() => setOpenSort(true)}>
          <FaSortAmountDown className="text-lg" />
          <p className="text-xs">Sort</p>
        </button>
        <button onClick={() => setOpenSidebar(true)}>
          <FaFilter className="text-lg" />
          <p className="text-xs">Filter</p>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 p-3 bg-white">
          <Sidebar />
          <button
            onClick={() => setOpenSidebar(false)}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-3 text-white bg-blue-400 rounded"
          >
            Close <IoClose />
          </button>
        </div>
      )}

      {/* Sort Modal */}
      {openSort && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-t-2xl">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold">Sort by</h2>
              <IoClose onClick={() => setOpenSort(false)} />
            </div>
            <ul className="space-y-3">
              <li className="pb-2 border-b">Recommended</li>
              <li className="pb-2 border-b">Price: Low to High</li>
              <li className="pb-2 border-b">Price: High to Low</li>
              <li className="pb-2 border-b">Newest First</li>
            </ul>
          </div>
        </div>
      )}

      {/* ✅ Quick View Modal */}
      <ProductQuickViewDialog
        open={openQuickView}
        onClose={() => setOpenQuickView(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default CategoryPage;
