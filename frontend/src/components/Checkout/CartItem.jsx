import { IconButton } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white shadow-sm rounded-xl">
      <img
        src={item.image}
        className="object-cover w-24 rounded-lg h-28"
        alt=""
      />

      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">Qty: {item.qty}</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="font-semibold">
            ₹{item.price * item.qty}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{item.originalPrice * item.qty}
          </span>
        </div>
      </div>

      <IconButton onClick={() => removeFromCart(item.id)}>
        <MdDeleteOutline />
      </IconButton>
    </div>
  );
};

export default CartItem;
