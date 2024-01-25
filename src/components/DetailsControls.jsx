import { useState } from "react";
import Plus from "./../assets/images/icon-plus.svg";
import Minus from "./../assets/images/icon-minus.svg";

const DetailsControls = ({ setCart, cart }) => {
  const [quantity, setQuantity] = useState(0);

  function decreaseQty() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  }

  function increaseQty() {
    setQuantity(quantity + 1);
  }

  function handleAddToCart() {
    setCart(cart + quantity);
    setQuantity(0);
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-row w-full justify-between items-center p-4 bg-gray-100 rounded-lg">
        <img
          src={Minus}
          alt="minus icon"
          onClick={decreaseQty}
          className="md:hover:cursor-pointer"
        />
        <span className="font-bold">{quantity}</span>
        <img
          onClick={increaseQty}
          src={Plus}
          alt="plus icon"
          className="md:hover:cursor-pointer"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-orange-500 p-4 rounded-lg text-white flex justify-center items-center gap-2 font-bold shadow-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DetailsControls;
