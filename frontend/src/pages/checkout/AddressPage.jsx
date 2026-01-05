import CheckoutLayout from "../../components/Checkout/CheckoutLayout";
import PriceSummary from "../../components/Checkout/PriceSummary";
import AddressCard from "../../components/Checkout/AddressCard";
import { useCheckout } from "../../components/context/CheckoutContext";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const { checkout } = useCheckout();
  const navigate = useNavigate();

  return (
    <CheckoutLayout>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Address List */}
        <div className="space-y-4 lg:col-span-2">
          {checkout.addresses.length === 0 ? (
            <p className="text-gray-500">No address found</p>
          ) : (
            checkout.addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={(addr) => console.log("Edit address:", addr)}
              />
            ))
          )}
        </div>

        {/* Price Summary */}
        <div className="lg:sticky top-24 h-fit">
          <PriceSummary
            ctaLabel="Continue to Payment"
            onCta={() => navigate("/checkout/payment")}
            disabled={!checkout.selectedAddressId}
          />
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default AddressPage;
