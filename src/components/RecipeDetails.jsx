// components/RecipeDetails.js
import React from "react";
import Ingredients from "./components/Ingredients"; //Viktor

// RecipeDetails-komponenten ansvarar för att visa detaljerna om det valda receptet.
// Den tar emot ett "recipe" objekt som en prop.
const RecipeDetails = ({ recipe }) => {
  // Om inget recept är valt, visas ett meddelande för att be användaren välja ett recept.
  if (!recipe) return <div>Select a recipe to see details</div>;

  // När ett recept är valt visas dess detaljer: namn, beskrivning, ingredienser och steg.
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      
      {/* Visa receptets ingredienser som en lista */}
      <Ingredients/>

      {/* Visa tillagningsstegen i ordning */}
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
