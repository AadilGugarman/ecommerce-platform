import React from "react";
import { Link } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const Footer = () => {
  return (
    <footer className="w-full px-8 py-10 bg-gray-100 border-t shadow-md">
      <div className="flex flex-col gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Contact Us */}
        <div className="flex flex-col items-center w-full gap-3 md:border-r md:w-1/3 md:pr-6">
          <h2 className="text-2xl font-bold text-blue-600">Contact Us</h2>
          <p className="text-center">
            Firdosh Park Society, <br /> Barkoshia Road, Nadiad-387001
          </p>
          <p>
            Email:{" "}
            <a href="mailto:aadil5@gmail.com" className="text-blue-500">
              aadil5@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+918866077440" className="text-blue-500">
              +91-8866077440
            </a>
          </p>
          <div className="flex items-center gap-2 mt-2 cursor-pointer hover:text-blue-600">
            <BsChatSquareDots size={22} />
            <span>Chat with Us</span>
          </div>
        </div>

        {/* Products + Company */}
        <div className="hidden w-full grid-cols-1 gap-6 md:grid md:w-2/3 md:grid-cols-3 ">
          {/* Products */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-xl font-semibold">Products</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/prices-drop" className="hover:text-blue-600">
                  Prices Drop
                </Link>
              </li>
              <li>
                <Link to="/new-products" className="hover:text-blue-600">
                  New Products
                </Link>
              </li>
              <li>
                <Link to="/best-sales" className="hover:text-blue-600">
                  Best Sales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-blue-600">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-blue-600">
                  Stores
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-xl font-semibold">Our Company</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/delivery" className="hover:text-blue-600">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/legal-notice" className="hover:text-blue-600">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/secure-payments" className="hover:text-blue-600">
                  Secure Payments
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-600">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h2 className="mb-3 text-xl font-semibold">Newsletter</h2>
            <p className="mb-4 text-sm text-gray-600">
              Subscribe to our newsletter to get updates about special
              discounts.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700">
                SUBSCRIBE
              </button>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Checkbox size="small" />
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-600">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 pt-6 mt-10 text-center border-t md:flex-row">
        <div className="flex gap-5 text-lg text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaPinterestP />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ASZ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
