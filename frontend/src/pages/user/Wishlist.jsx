import { useWishlist } from "../../components/context/WishlistContext";


const Wishlist = () => {
  const { wishlistItems, toggleWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Your wishlist is empty ❤️
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {wishlistItems.map((item) => (
        <div key={item.id} className="p-4 border rounded">
          <img
            src={item.image}
            alt={item.title}
            className="object-contain w-full h-40"
          />
          <h3 className="mt-2 font-semibold">{item.title}</h3>
          <p className="text-gray-600">₹{item.price}</p>

          <button
            onClick={() => toggleWishlist(item)}
            className="mt-3 text-sm text-red-500"
          >
            Remove from Wishlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
