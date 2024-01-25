import React from "react";
import firstImg from "./../assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "./../assets/images/icon-delete.svg";

const CartDetails = ({ cart, setCart }) => {
  return (
    <div className="absolute top-20 md:top-12 md:shadow-xl z-10 bg-white left-[50%] translate-x-[-50%]  w-[345px] rounded-xl overflow-hidden">
      <div className="p-6 border-b-2 font-bold">Cart</div>
      <div className="p-6 flex flex-col gap-6 shadow-xl">
        {cart > 0 ? (
          <>
            <div className="flex flex-row justify-between items-center">
              <img
                src={firstImg}
                alt="thumbnail picture of product"
                className="rounded-md h-12 w-12"
              />
              <div>
                <p className="text-medium text-gray-500">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-medium text-gray-500">
                  $125.00 x {cart}{" "}
                  <span className="font-bold text-black">${cart * 125}.00</span>
                </p>
              </div>
              <img
                onClick={() => setCart(0)}
                src={DeleteIcon}
                alt="trash can icon for deleting products"
              ></img>
            </div>
            <button className="p-4 bg-orange-500 font-bold text-white w-full text-center rounded-lg">
              Checkout
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center h-[128px] w-full">
            <p className="font-bold text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
