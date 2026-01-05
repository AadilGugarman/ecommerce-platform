// src/components/checkout/PaymentOption.jsx

import { Radio } from "@mui/material";
import {
  FaGooglePay,
  FaAmazonPay,
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";

const UPI_REGEX = /^[\w.-]+@[\w.-]+$/;

/* ===================== UPI APPS ===================== */
const UPI_APPS = [
  {
    id: "gpay",
    label: "Google Pay",
    bg: "bg-blue-50",
    active: "bg-blue-600",
    iconColor: "text-blue-600",
    icon: FaGooglePay,
  },
  {
    id: "phonepe",
    label: "PhonePe",
    bg: "bg-purple-50",
    active: "bg-purple-600",
    iconColor: "text-purple-600",
    icon: SiPhonepe,
  },
  {
    id: "paytm",
    label: "Paytm",
    bg: "bg-sky-50",
    active: "bg-sky-600",
    iconColor: "text-sky-600",
    icon: SiPaytm,
  },
  {
    id: "amazon",
    label: "Amazon Pay",
    bg: "bg-orange-50",
    active: "bg-orange-500",
    iconColor: "text-orange-500",
    icon: FaAmazonPay,
  },
];

/* ===================== HELPERS ===================== */

// Format card number XXXX XXXX XXXX XXXX
const formatCardNumber = (value) =>
  value
    .replace(/\D/g, "")
    .substring(0, 16) 
    .replace(/(.{4})/g, "$1 ")
    .trim();

// Detect card type
const getCardType = (number) => {
  if (/^4/.test(number)) return "VISA";
  if (/^5[1-5]/.test(number)) return "MASTERCARD";
  if (/^(60|65|81|82)/.test(number)) return "RUPAY";
  return "";
};

const PaymentOption = ({
  title,
  type,
  selected,
  onSelect,

  // UPI
  selectedUpi,
  onUpiSelect,
  upiId,
  onUpiIdChange,

  // Card
  card = { number: "", expiry: "", cvv: "" },
  onCardChange = () => {},
}) => {
  const cardType = getCardType(card.number.replace(/\s/g, ""));

  return (
    <div
      onClick={onSelect}
      className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300
        ${selected ? "border-black bg-gray-50 shadow-md" : "border-gray-200"}
      `}
    >
      {/* ===================== HEADER ===================== */}
      <div className="flex items-center gap-3">
        <Radio checked={selected} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* ===================== UPI ===================== */}
      {selected && type === "UPI" && (
        <div className="pl-10 mt-5 space-y-4">
          {UPI_APPS.map((app) => {
            const active = selectedUpi === app.id;

            return (
              <div
                key={app.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onUpiSelect(app.id);
                }}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all
                  ${
                    active
                      ? `${app.active} text-white shadow-lg`
                      : `${app.bg} border-gray-200 hover:shadow`
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <app.icon
                    size={26}
                    className={active ? "text-white" : app.iconColor}
                  />
                  <span className="font-medium">{app.label}</span>
                </div>
                <Radio checked={active} sx={{ color: active ? "#fff" : "" }} />
              </div>
            );
          })}

          {/* OPTIONAL UPI ID */}
          <div>
            <input
              type="text"
              placeholder="UPI ID (optional)"
              value={upiId}
              onChange={(e) => onUpiIdChange(e.target.value)}
              className={`w-full p-3 rounded-xl border outline-none
                ${
                  upiId && !UPI_REGEX.test(upiId)
                    ? "border-red-500"
                    : "focus:border-black focus:ring-1 focus:ring-black"
                }
              `}
            />
            {upiId && !UPI_REGEX.test(upiId) && (
              <p className="mt-1 text-sm text-red-500">
                Invalid UPI ID format
              </p>
            )}
          </div>
        </div>
      )}

      {/* ===================== CARD ===================== */}
      {selected && type === "CARD" && (
        <div className="pl-10 mt-5 space-y-4">
          {/* 🔥 AMAZON-STYLE HEADER */}
          <div className="flex items-center justify-between p-4 bg-white border shadow-sm rounded-xl">
            <div>
              <p className="font-semibold">Credit / Debit Card</p>
              <p className="text-sm text-gray-500">
                Visa, MasterCard, RuPay supported
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaCcVisa size={26} />
              <FaCcMastercard size={26} />
              <span className="font-semibold">RuPay</span>
            </div>
          </div>

          {/* 💳 CARD PREVIEW */}
          <div className="p-4 text-white shadow-lg rounded-xl bg-gradient-to-br from-gray-900 to-gray-700">
            <FaCreditCard className="mb-4 opacity-80" />
            <p className="text-lg tracking-widest">
              {card.number || "•••• •••• •••• ••••"}
            </p>
            <div className="flex justify-between mt-3 text-sm opacity-80">
              <span>{card.expiry || "MM/YY"}</span>
              <span>{cardType || "CARD"}</span>
            </div>
          </div>

          {/* CARD NUMBER */}
          <div>
            <label className="text-sm font-medium">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={card.number}
              onChange={(e) =>
                onCardChange("number", formatCardNumber(e.target.value))
              }
              className="w-full p-3 mt-1 border outline-none rounded-xl focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* EXPIRY */}
            <div>
              <label className="text-sm font-medium">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={card.expiry}
                onChange={(e) => onCardChange("expiry", e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            {/* CVV */}
            <div>
              <label className="text-sm font-medium">CVV</label>
              <input
                type="password"
                maxLength={3}
                value={card.cvv}
                onChange={(e) => onCardChange("cvv", e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <p className="flex items-center gap-2 text-sm text-gray-500">
            <FaCreditCard />
            Your card details are securely encrypted
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentOption;
