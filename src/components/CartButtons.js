import React from "react";
import { MdOutlineShoppingCart, MdShoppingCartCheckout } from "react-icons/md";

function CartButtons({ showOverlay, setShowOverlay }) {
  return (
    <div className="flex flex-col justify-around w-1/5">
      <button
        onClick={() => {
          setShowOverlay(!showOverlay);
        }}
        className="bg-white border-2 border-black py-3 px-4 rounded-2xl flex justify-center"
      >
        <MdOutlineShoppingCart size={30} />
      </button>
      <button className="bg-white border-2 border-black py-3 px-4 rounded-2xl flex justify-center">
        <MdShoppingCartCheckout size={30} />
      </button>
    </div>
  );
}

export default CartButtons;
