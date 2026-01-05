import { IconButton } from "@mui/material";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { useCheckout } from "../context/CheckoutContext";

const AddressCard = ({ address, onEdit }) => {
  const { checkout, selectAddress, deleteAddress } = useCheckout();

  const isSelected = checkout.selectedAddressId === address.id;

  return (
    <div
      onClick={() => selectAddress(address.id)}
      className={`p-4 rounded-xl border cursor-pointer transition
        ${isSelected ? "border-black bg-gray-50" : "border-gray-200"}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold">
            {address.name}
            <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 rounded">
              {address.label}
            </span>
          </p>

          <p className="mt-1 text-sm text-gray-600">
            {address.street}, {address.city}, {address.state} -{" "}
            {address.pincode}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Phone: {address.phone}
          </p>
        </div>

        <div className="flex gap-1">
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(address);
            }}
          >
            <MdEdit />
          </IconButton>

          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              deleteAddress(address.id);
            }}
          >
            <MdDeleteOutline />
          </IconButton>
        </div>
      </div>

      {isSelected && (
        <p className="mt-2 text-xs font-medium text-green-600">
          ✓ Deliver to this address
        </p>
      )}
    </div>
  );
};

export default AddressCard;
