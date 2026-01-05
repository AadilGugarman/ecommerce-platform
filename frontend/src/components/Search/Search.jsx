import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BsSearchHeart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import {TbTruckDelivery} from "react-icons/tb";

const recentSearches = ["Laptop", "Headphones", "Shoes"];

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Search Bar */}
      <div className="container flex items-center justify-between w-full bg-gray-50 ">
        <div className="relative items-center justify-center hidden w-1/2 border border-blue-500 rounded-md md:flex">
        <input
          type="text"
          placeholder="Search for Products..."
          className="w-full h-10 px-3 text-base rounded-md bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button className="absolute right-0 p-2 rounded-full">
          <BsSearchHeart className="text-2xl" />
        </Button>
        </div>
         <div className="items-center justify-end hidden w-1/2 text-center gap-7 md:flex">
         <span className="flex items-center gap-1 font-medium text-blue-600 ">
              <TbTruckDelivery className="text-xl " />
              Free Delivery
            </span>
            <span className="flex items-center gap-1 font-medium text-green-600">
              <MdPayment className="text-xl" />
              Secure Payment
            </span>
            <span className="flex items-center gap-1 font-medium text-red-600">
              <GiReturnArrow className="text-xl" />
              Easy Returns
            </span>
      </div>
      </div>

      {/* Mobile Search Button */}
      <div className="flex items-center justify-center mt-2 md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center w-full px-3 py-2 space-x-2 text-gray-600 transition border rounded-lg hover:border-gray-400"
        >
          <BsSearchHeart className="text-2xl" />
          <span className="normal-case">Search for Products...</span>
        </Button>
      </div>

      {/* Mobile Search Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white w-full max-w-md mt-4 rounded-xl shadow-lg p-4 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <input
              type="text"
              placeholder="Search for Products..."
              autoFocus
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button
              onClick={() => setIsOpen(false)}
              className="p-1 ml-2 text-gray-500 rounded-full hover:text-gray-900"
            >
              <IoClose className="text-xl" />
            </Button>
          </div>

          {/* Recent Searches */}
          <div className="flex flex-col gap-1 text-sm text-gray-500">
            {recentSearches.map((item, idx) => (
              <span
                key={idx}
                className="p-2 rounded cursor-pointer hover:bg-gray-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
