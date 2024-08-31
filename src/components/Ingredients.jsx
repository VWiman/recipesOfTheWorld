// --- Viktors code ---
export default function Ingredients({ props }) {
	// Plocka ut recipeList, activeId från props
	const { recipeList, activeId } = props;

	// Skapa en lista för ingredienser
	const ingredientsList = [];

	// Hitta det aktuella receptet med hjälp av activeId
	const currentRecipe = recipeList.find((recipe) => recipe.idMeal === activeId);

	// Kontrollera om ett recept hittas
	if (currentRecipe) {
		// Filtrera ut ingredienser/nycklar (vars nyckel börjar med "strIngredient") från objektet currentRecipe
		Object.keys(currentRecipe)
			.filter((key) => key.startsWith("strIngredient")) // Filtrera "keys" som börjar med "strIngredient" och placera dem i en array 
			.forEach((ingredientKey) => {
				// För varje nyckel i den array vi skapat så hämtas ingrediensen med hjälp av nyckeln i ett forEach loop
				const ingredient = currentRecipe[ingredientKey];
				// Kontrollera att ingrediensen inte är tom eller null
				if (ingredient) {
					// Lägg till den icke-tomma ingrediensen i ingredientsList
					ingredientsList.push(ingredient);
				}
			});
	} else {
		// Om inget recept hittas med angivet id
		console.warn("No recipe found with the given ID:", activeId);
	}

	// Returnera en lista med ingredienser eller ett meddelande om att inga ingredienser hittats
	return (
		<ul>
			{ingredientsList.length > 0 ? (
				ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)
			) : (
				<p>No ingredients found.</p>
			)}
		</ul>
	);
}
