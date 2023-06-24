import React, { useState } from "react";
import Items from "./components/Items.js";
import CartOverlay from "./components/CartOverlay.js";
import Menu from "./components/Menu.js";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Items />
      <CartOverlay
        showMenu={showMenu}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </>
  );
}

export default App;
