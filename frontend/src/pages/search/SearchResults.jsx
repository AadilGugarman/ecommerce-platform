import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";

import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "../../data/dummyData";
import { getFilteredProducts } from "../../services/productService";

import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiEye } from "react-icons/fi";

import { useWishlist } from "../../components/context/WishlistContext";

const SearchResults = () => {
  const [params] = useSearchParams();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const allProducts = [
    ...fashionProducts,
    ...electronicsProducts,
    ...beautyProducts,
  ];

  const filters = {
    q: params.get("q"),
    brands: params.get("brand")?.split(",") || [],
    rating: params.get("rating"),
    stock: params.get("stock"),
    price: params.get("price")
      ? params.get("price").split("-").map(Number)
      : null,
    sort: params.get("sort"),
  };

  const results = useMemo(
    () => getFilteredProducts(allProducts, filters),
    [params.toString()]
  );

  return (
    <div className="container py-6">
      <h1 className="mb-4 text-xl font-semibold">
        Search results for "{filters.q}"
      </h1>

      {results.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-gray-500">
          <img src="/empty-search.svg" className="w-40 mb-4" />
          <p className="text-lg font-medium">No results found</p>
          <p className="text-sm">Try a different keyword</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {results.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.category}/${item.id}`}
              className="relative flex flex-col overflow-hidden bg-white border rounded-lg shadow-sm group hover:shadow-md"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full"
              />

              {/* HOVER ACTIONS */}
              <div className="absolute z-10 flex flex-col gap-2 opacity-0 top-2 right-2 group-hover:opacity-100">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="p-2 text-white bg-blue-500 rounded-full"
                >
                  <TbShoppingCartPlus />
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(item);
                  }}
                  className="p-2 text-white bg-red-500 rounded-full"
                >
                  {isInWishlist(item.id) ? <IoMdHeart /> : <IoMdHeartEmpty />}
                </button>
              </div>

              {/* INFO */}
              <div className="p-3">
                <p className="text-sm font-semibold truncate">{item.title}</p>
                <p className="text-xs text-gray-500">₹{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
