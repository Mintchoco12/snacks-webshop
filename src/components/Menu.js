import React from "react";
import Keypad from "./Keypad";
import CartButtons from "./CartButtons";
import { ImMenu2 } from "react-icons/im";

function Menu({ showMenu, setShowMenu, showOverlay, setShowOverlay }) {
  return (
    <div
      className={`flex absolute bottom-0 w-screen z-10 transition-height duration-500 ease-in-out ${
        showMenu ? "h-full" : "h-1/5"
      }`}
    >
      <div className="flex justify-center items-center w-screen">
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="bg-white opacity-60 hover:opacity-90 w-12 h-12 rounded-full absolute flex items-center justify-center border-2 border-black"
        >
          <ImMenu2 className="r" size={30} />
        </button>
      </div>
      <div
        className={`bg-tertiary-color flex justify-around absolute bottom-0 left-0 p-5 w-screen h-2/5 duration-500 transition ease-in-out bg-opacity-95 ${
          showMenu ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Keypad />
        <CartButtons
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      </div>
    </div>
  );
}

export default Menu;
