import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { BsSearchHeart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { fetchSearchSuggestions } from "../../services/searchService";

const recentSearches = ["Laptop", "Headphones", "Shoes"];

/* ✅ Known categories */
const CATEGORIES = ["fashion", "electronics", "beauty"];

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* 🔁 DEBOUNCE SEARCH */
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetchSearchSuggestions(query);
        setSuggestions(res);
        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /* ✅ FIXED SEARCH LOGIC */
  const handleSearch = (value) => {
    if (!value.trim()) return;

    const keyword = value.trim().toLowerCase();
    const pathname = location.pathname;

    // 1️⃣ If keyword is a category → go to category
    if (CATEGORIES.includes(keyword)) {
      navigate(`/category/${keyword}`);
    }

    // 2️⃣ If already on category page → search inside category
    else if (pathname.startsWith("/category/")) {
      const params = new URLSearchParams(location.search);
      params.set("q", value);
      navigate(`${pathname}?${params.toString()}`);
    }

    // 3️⃣ Home or other pages → global search
    else {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }

    setQuery("");
    setSuggestions([]);
    setShowDropdown(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="w-full bg-gray-50">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <div className="relative hidden md:block w-[420px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              placeholder="Search for products..."
              className="w-full pl-5 pr-12 border border-gray-300 rounded-full outline-none h-11 focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => handleSearch(query)}
              className="absolute text-pink-600 -translate-y-1/2 right-4 top-1/2 hover:text-pink-700"
            >
              <BsSearchHeart className="text-xl" />
            </button>

            {showDropdown && (
              <div className="absolute z-50 w-full mt-2 bg-white border shadow-lg rounded-xl">
                {(suggestions.length ? suggestions : recentSearches).map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => handleSearch(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="items-center hidden gap-8 pr-4 md:flex">
            <span className="flex items-center gap-2 text-sm font-medium text-blue-600">
              <TbTruckDelivery /> Free Delivery
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-green-600">
              <MdPayment /> Secure Payment
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-red-600">
              <GiReturnArrow /> Easy Returns
            </span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="px-4 mt-3 md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center w-full gap-2 border rounded-full h-11"
        >
          <BsSearchHeart />
          Search for products...
        </Button>
      </div>

      {/* ================= MOBILE MODAL ================= */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-full max-w-md p-4 mx-auto mt-4 bg-white rounded-xl">
          <div className="flex gap-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              placeholder="Search products..."
              className="w-full px-4 border rounded-full h-11"
            />
            <Button onClick={() => setIsOpen(false)}>
              <IoClose />
            </Button>
          </div>

          <div className="mt-4 border rounded-lg">
            {(suggestions.length ? suggestions : recentSearches).map((item) => (
              <div
                key={item}
                onClick={() => handleSearch(item)}
                className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
