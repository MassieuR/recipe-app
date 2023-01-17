import React, { createContext, useState, useEffect } from "react";

export const generalContext = createContext();

const ContextProvider = (props) => {
  const [cartList, setCartList] = useState([{name: 'Hamburguer', type: 'fast-food', ingredients: { meat: 8, tomato: 1}, q: 1}]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [recipeList, setRecipeList] = useState([{name: 'Hamburguer', type: 'fast-food', ingredients: { meat: 8}}]);
  const [components, setComponents] = useState(["Sample"]);
  const [recipeQ, setRecipeQ] = useState([...cartList])

  const countItemsHandler = () => {
    setCartItemsCount(cartList.length);
  };

  const addBasicRecipeHandler = (e) => {
    let name = e.target[0].value;
    e.preventDefault();
    if (name.length !== 0) {
      setRecipeList([...recipeList, { name: name }]);
      document.querySelector(".recipeCreator").value = "";
    } else {
      alert("Please write a name for the food");
    }
  };

  const addRecipeHandler = (e) => {
    const name = e.target[0].value;
    const type = e.target[1].value;
    const ingredientsName = [];
    const ingredientsQuantities = [];
    const ingredientObject = {};

    const ingredientsQuery = document.querySelectorAll('.mealIngredients')
      .forEach(el => {
        ingredientsName.push(el.value)
      });
      
    const quantitiesQuery = document.querySelectorAll('.mealIngredientsQ')
      .forEach(el => {
        ingredientsQuantities.push(el.value)
      });

      ingredientsName.forEach((el, i) => {
        ingredientObject[el] = ingredientsQuantities[i]
      });
    
    const names = recipeList.map((el) => el.name);
    e.preventDefault();
    if (
      name.length !== 0 &&
      type.length !== 0 &&
      ingredientsName.length !== 0 &&
      ingredientsQuantities.length >= 0 &&
      !names.includes(name)
    ) {
      setRecipeList([
        ...recipeList,
        {
          name: name,
          type: type,
          ingredients: ingredientObject
        },
      ]);
      // document.querySelector(".recipeCreator").value = "";
    } else if (names.includes(name)) {
      alert("Meal name already exists");
    } else if (
      ingredientsQuery.length === 0 ||
      quantitiesQuery.length === 0 ||
      type.length === 0 ||
      name.length === 0
    ) {
      alert("Please fill all the fields");
    } else {
      alert("Please write a name for the food");
    }
  };

  const newIngridientHandler = (e) => {
    e.preventDefault();
  };

  const BOMHandler = (e) => {
    e.preventDefault()
    console.log(cartList);
    const recipes = {}
    cartList.forEach(el => {
      const numberOfMeals = el.q;
      const ingredients = Object.keys(el.ingredients).map(el => el.toLowerCase());
      const quantityPerIngredient = Object.values(el.ingredients);
      for (let i = 0; i < ingredients.length; i++) {
        if(recipes[ingredients[i]] === undefined){
          recipes[ingredients[i]] = quantityPerIngredient[i] * numberOfMeals
        } else {
          recipes[ingredients[i]] += quantityPerIngredient[i] * numberOfMeals
        }  
      }
      
    })
    console.log(recipes)
  }

  useEffect(() => {
    countItemsHandler();
    setRecipeQ([...cartList])
  }, [cartList]);
  
  return (
    <generalContext.Provider
      value={{
        addBasicRecipeHandler,
        addRecipeHandler,
        recipeList,
        cartList,
        setCartList,
        cartItemsCount,
        countItemsHandler,
        BOMHandler,
        components,
        newIngridientHandler,
        recipeQ,
        setRecipeQ
      }}
    >
      {props.children}
    </generalContext.Provider>
  );
};

export default ContextProvider;