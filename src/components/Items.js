import React from "react";
import { snacks } from "../snacks.js";

function Items() {
  return (
    <div className="bg-primary-color max-lg:w-screen  z-0">
      <ul className="grid grid-cols-4 gap-1 h-screen overflow-y-scroll">
        {snacks.map((snack) => (
          <li
            key={snack.id}
            className="bg-secondary-color w-full h-40 flex flex-col justify-center items-center p-1.5"
          >
            <img
              className="object-contain w-max min-h-0 h-full"
              src={snack.image}
              alt={snack.name}
            />
            <p className="bg-primary-color flex items-center py-1 px-5 rounded-lg border-2 text-white">
              {snack.id}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
