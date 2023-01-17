import React, { useContext } from "react";
import { generalContext } from "../generalContext";
import Food from "./Food/Food";

export default function FoodList() {
  const { recipeList } = useContext(generalContext);

  
  return (
    <>
      {recipeList.map((el) => (
        <Food
          key={el.name}
          name={el.name}
          type={el.type}
          ingredients={el.ingredients}
          q={el.q}
        />
      ))}
    </>
  );
}
