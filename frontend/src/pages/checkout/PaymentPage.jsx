// src/pages/checkout/PaymentPage.jsx

import CheckoutLayout from "../../components/Checkout/CheckoutLayout";
import PriceSummary from "../../components/Checkout/PriceSummary";
import PaymentOption from "../../components/checkout/PaymentOption";
import { useCheckout } from "../../components/context/CheckoutContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { checkout, setPaymentMethod, setUpiApp, setUpiId } = useCheckout();
  const navigate = useNavigate();

  return (
    <CheckoutLayout>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT */}
        <div className="space-y-4 lg:col-span-2">
          {/* UPI */}
          <PaymentOption
            title="UPI"
            type="UPI"
            selected={checkout.paymentMethod === "UPI"}
            onSelect={() => setPaymentMethod("UPI")}
            selectedUpi={checkout.upiApp}
            onUpiSelect={setUpiApp}
            upiId={checkout.upiId}
            onUpiIdChange={setUpiId}
          />

          {/* CARD */}
          <PaymentOption
            title="Credit / Debit Card"
            type="CARD"
            selected={checkout.paymentMethod === "CARD"}
            onSelect={() => setPaymentMethod("CARD")}
          />

          {/* COD */}
          <PaymentOption
            title="Cash on Delivery"
            selected={checkout.paymentMethod === "COD"}
            onSelect={() => setPaymentMethod("COD")}
          />
        </div>

        {/* RIGHT */}
        <div className="lg:sticky top-24 h-fit">
          <PriceSummary
            ctaLabel="Pay Now"
            onCta={() => navigate("/checkout/success")}
            disabled={
              !checkout.paymentMethod ||
              (checkout.paymentMethod === "UPI" && !checkout.upiApp)
            }
          />
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default PaymentPage;
