import React, { useState } from "react";

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
        console.log("Entered number: ", displayNumber);
        break;
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
        <p className="h-12 w-48 flex items-center justify-center">
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
                  className={`${
                    button === "C"
                      ? "bg-red-500"
                      : button === "0"
                      ? "bg-white text-black"
                      : button === "Enter"
                      ? "bg-green-500"
                      : "bg-white text-black"
                  } border-2 border-black font-bold rounded-md p-2 m-1`}
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
