import CheckoutLayout from "../../components/Checkout/CheckoutLayout";
import CartItem from "../../components/Checkout/CartItem";
import PriceSummary from "../../components/Checkout/PriceSummary";
import { useCart } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <CheckoutLayout>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="mt-1 text-sm text-gray-500">
                Add items to proceed to checkout
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Price Summary */}
        <div className="lg:sticky top-24 h-fit">
          <PriceSummary
            ctaLabel="Place Order"
            // disabled={cartItems.length === 0}
            onCta={() => navigate("/checkout/address")}
          />
        </div>

      </div>
    </CheckoutLayout>
  );
};

export default CartPage;
