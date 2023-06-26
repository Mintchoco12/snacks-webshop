import React from "react";
import { cartItems } from "./cartItems.js";

function CartOverlay({ showOverlay, showMenu }) {
  function generateRandomKey() {
    return Math.random().toString(36).substring(2, 15);
  }

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
        </ul>
      </div>
      <div
        className={`h-full w-full bg-black fixed z-0 ${
          showOverlay && showMenu ? "opacity-60" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}

export default CartOverlay;
