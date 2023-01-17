import React, { useContext } from "react";
import { generalContext } from "../../generalContext";
import "./CartMenu.css";
import CartItem from "./CartItem/CartItem";
import { v4 as uuidv4 } from "uuid";

export default function CartMenu({ toggleCart, recipeQ }) {
    const {BOMHandler} = useContext(generalContext);
      

  return (
    <div id="cartMenu">
      <button onClick={toggleCart}>Close menu</button>
      {recipeQ.map((el) => {
        return <CartItem key={uuidv4()} name={el.name} quantity={el.q}/>;
      })}
      <button className="submitBom" onClick={BOMHandler}>Submit</button>
    </div>
  );
}
