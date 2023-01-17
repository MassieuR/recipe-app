import React, { useContext, useRef } from "react";
import { generalContext } from "../generalContext";
import "./RecipeForm.css";
import IngridientItem from "./IngredientItem/IngridientItem";
import {v4 as uuidv4} from 'uuid';

export default function RecipeForm() {
  const { addRecipeHandler, components, newIngridientHandler } = useContext(generalContext);
  

  return (
    <form id="RecipeForm" onSubmit={addRecipeHandler}>
      <label htmlFor="mealName">Name</label>
      <input
        id="mealName"
        name="mealName"
        placeholder="Enter name here"
        type="text"
        required
      />
      <label htmlFor="mealType">Type</label>
      <select id="mealType" name="mealType" required>
        <option value="" defaultValue="" disabled hidden>
          Select a type of meal
        </option>
        <option value="fast-food">Fast-food</option>
        <option value="Ensaladas">Ensaladas</option>
        <option value="Guisados">Guisados</option>
        <option value="Sopas">Sopas</option>
        <option value="Entradas">Entradas</option>
        <option value="Postres">Postres</option>
      </select>
      <br />
      <label id="mealIngredients-label" htmlFor="mealIngredients">
        Ingredients
      </label>
      <label id="mealIngredientsQ-label" htmlFor="mealIngredientsQ">
        Quantity
      </label>
      {components.map((el) => {
        return <IngridientItem key={uuidv4()}/>;
      })}
      <button onClick={newIngridientHandler}>Add ingredient</button>
      <button>Submit</button>
    </form>
  );
}
