import React, { useState } from "react";
import { snacks } from "../snacks.js";
import { cartItems, addToCart } from "./cartItems.js";

export const buttons = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["C", "0", "Enter"],
];

function Keypad() {
  const [displayNumber, setDisplayNumber] = useState("");

  const handleButtonClick = (button) => {
    switch (button) {
      case "C":
        setDisplayNumber("");
        break;

      case "Enter":
        if (displayNumber <= 0 || displayNumber > snacks.length) {
          setDisplayNumber("ERROR");
          setTimeout(() => {
            setDisplayNumber("");
          }, 1000);
          break;
        } else if (cartItems.length === 9) {
          setDisplayNumber("FULL");
          setTimeout(() => {
            setDisplayNumber("");
          }, 1000);
          break;
        }
        else {
          const snack = snacks[displayNumber - 1];
          addToCart(snack);
          setDisplayNumber("SUCCESS");
          setTimeout(() => {
            setDisplayNumber("");
          }, 1000);
          break;
        }

      default:
        if (displayNumber.length < 3) {
          setDisplayNumber(displayNumber + button);
        }
        break;
    }
  };

  return (
    <div className="flex justify-center h-full items-center flex-col">
      <div className="bg-white rounded-md border-2 border-black mb-5 font-bold text-lg">
        <p className={`h-12 w-48 flex items-center justify-center ${
          displayNumber === "ERROR" || displayNumber === "FULL"
            ? "text-red-500"
            : displayNumber === "SUCCESS"
            ? "text-green-500"
            : "text-black"
        }`}>
          {displayNumber}
        </p>
      </div>
      <div>
        {buttons.map((row, rowIndex) => (
          <div className="grid grid-cols-3" key={rowIndex}>
            {Array.isArray(row) ? (
              row.map((button, buttonIndex) => (
                <button
                  key={buttonIndex}
                  onClick={() => handleButtonClick(button)}
                  className={`border-2 border-black font-bold rounded-md p-2 m-1 ${
                    button === "C"
                      ? "bg-red-500"
                      : button === "0"
                      ? "bg-white text-black"
                      : button === "Enter"
                      ? "bg-green-500"
                      : "bg-white text-black"
                  }`}
                >
                  {button}
                </button>
              ))
            ) : (
              <div className="col-span-3 flex justify-center">
                <button onClick={() => handleButtonClick(row)}>{row}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keypad;
