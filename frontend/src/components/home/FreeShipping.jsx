import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const FreeShipping = () => {
  return (
    <section className="m-2 ">
      <div className="container flex flex-col items-center justify-between w-full p-4 border-2 border-red-400 lg:flex-row">
        <div className="flex items-center gap-4 col1">
          <LiaShippingFastSolid className="text-2xl md:text-6xl" />
          <p className="text-xl font-bold md:text-3xl">FREE SHIPPING</p>
        </div>
        <div className="col2">
          <p className="text-sm font-medium text-center whitespace-nowrap">
            Free Delivery on your first order and above 200Rs
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeShipping;
