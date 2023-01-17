import React, { useContext } from "react";
import "./Food.css";
import { generalContext } from "../../generalContext";

export default function Food({ name, type, ingredients }) {
  const { cartList, setCartList, setRecipeQ } = useContext(generalContext);

  const addCartHandler = () => {
    const recipeName = name;
    const test = cartList.some(({name}) => name === recipeName);
    const itExists = cartList.findIndex(({name}) => name === recipeName);
    if (!test) {
        setCartList([...cartList, {name, type, ingredients, q: 1}]);
    } else {
        cartList[itExists].q += 1;
    }
    setRecipeQ([...cartList])
  };
  
  return (
    <div id="recipeCard">
      <h3>{name}</h3>
      <p>{type}</p>
      <button onClick={addCartHandler} className="addCartBtn">
        Add to Cart
      </button>
    </div>
  );
}
