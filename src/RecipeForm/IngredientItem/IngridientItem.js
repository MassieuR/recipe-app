import React from "react";

export default function IngredientItem() {
  return (
    <>
      <br />
      <input
        className="mealIngredients"
        name="mealIngredients"
        placeholder="Ingredient"
        type="text"
        required
      />
      <input
        className="mealIngredientsQ"
        name="mealIngredientsQ"
        placeholder="Quantity"
        type="text"
        required
      />
    </>
  );
}
