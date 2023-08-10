import recipedata from "./recipe.json";

function IngredientList() {

  let listOfIngredients = recipedata.map (recipe => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;

    });
  });


   return <div>{listOfIngredients}</div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 