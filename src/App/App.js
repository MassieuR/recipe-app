import "./App.css";
import React from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import FoodList from "../FoodList/FoodList";
import Cart from '../Cart/Cart'

function App() {
  return (
    <>
      <Cart />
      <RecipeForm />
      <FoodList />
    </>
  );
}

export default App;
