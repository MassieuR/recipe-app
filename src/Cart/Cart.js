import React, { useState, useContext } from "react";
import { generalContext } from "../generalContext";
import "./Cart.css";
import CartMenu from './CartMenu/CartMenu'

export default function Cart() {
  const { cartItemsCount, recipeQ} = useContext(generalContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleCart = () => {
    setOpenMenu(!openMenu);
  };

  if (openMenu) {
    return (
      <>
        <CartMenu toggleCart={toggleCart} recipeQ={recipeQ}/>
      </>
    );
  } else {
    return (
      <div id="carrito">
        <h3>Mi carrito</h3>
        <p>{cartItemsCount}</p>
        <button onClick={toggleCart}>Show Cart</button>
      </div>
    );
  }
}
