// components/RecipeDetails.js
import React from "react";
import Ingredients from "./Ingredients"; //Viktor

// RecipeDetails-komponenten ansvarar för att visa detaljerna om det valda receptet.
// Den tar emot ett "recipe" objekt som en prop.
const RecipeDetails = ({recipeList, activeId, currentRecipe}) => {
  const recipe = currentRecipe;
  console.log(recipe.idMeal);
	// Om inget recept är valt, visas ett meddelande för att be användaren välja ett recept.
	if (!activeId) return <div>Select a recipe to see details</div>;

	// När ett recept är valt visas dess detaljer: namn, beskrivning, ingredienser och steg.
	return (
		<div>
			<h2>{recipe.strMeal}</h2>
			<img src={recipe.strMealThumb} />
			{/* Visa receptets ingredienser som en lista */}
			<Ingredients props={{recipeList, activeId}} />
			{/* Visa tillagningsstegen i ordning */}
			<h3>Instructions</h3>
			<p>{recipe.strInstructions}</p>
		</div>
	);
};

export default RecipeDetails;
