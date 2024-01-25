import React from "react";
import DetailsControls from "./DetailsControls";

const Details = ({ setCart, cart }) => {
  return (
    <div className="p-6 flex flex-col gap-4 md:gap-6 md:justify-between md:p-6 lg:p-10 xl:p-20 md:py-12 lg:py-24 xl:py-32">
      <p className="text-orange-500 font-bold">SNEAKER COMPANY</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row justify-between items-center md:flex-col md:justify-start md:items-start">
        <div className="flex flex-row  gap-2 items-center justify-center">
          <p className="font-bold text-2xl">$125.00</p>
          <span className="text-orange-500 text-sm px-1 font-bold bg-orange-200 rounded-md h-fit w-fit">
            50%
          </span>
        </div>
        <p className="text-sm text-gray-300 font-bold line-through">$250.00</p>
      </div>
      <DetailsControls setCart={setCart} cart={cart} />
    </div>
  );
};

export default Details;
