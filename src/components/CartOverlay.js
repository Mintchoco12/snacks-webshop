import React from "react";
import { calculateTotalPrice, cartItems, clearCart } from "./cartItems.js";

function CartOverlay({ showOverlay, showMenu }) {
  function generateRandomKey() {
    return Math.random().toString(36).substring(2, 15);
  }

  const totalPrice = calculateTotalPrice();

  return (
    <div
      className={`flex fixed justify-center items-center top-0 left-0 w-screen h-3/5 opacity-95 transition duration-500 ease-in-out ${
        showOverlay && showMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-tertiary-color w-11/12 h-9/10 rounded-lg border-2 border-white z-10">
        <ul className="z-20 grid grid-cols-3 grid-rows-4 w-full h-full">
          {cartItems.map((snack) => (
            <li key={generateRandomKey()} className="flex justify-center m-1">
              <img
                src={snack.image}
                alt={snack.name}
                className="object-contain w-28 rounded-lg"
              />
            </li>
          ))}
          <div className="font-bold text-white row-start-4 flex justify-center items-center">
            <p>Total price: €{totalPrice}</p>
          </div>
          <div className="font-bold row-start-4 col-start-3 flex justify-center items-center z-50">
            <button
              onClick={() => {
                clearCart();
              }}
              className="bg-red-500 p-3 border-2 border-black rounded-md "
            >
              Clear cart
            </button>
          </div>
        </ul>
      </div>
      <div
        className={`h-full w-full bg-black fixed z-0 opacity-60 transition duration-500 ease-in-out`}
      ></div>
    </div>
  );
}

export default CartOverlay;
