// Viktors component
export default function Ingredients({ props }) {
	// Plocka ut recipeList, activeId från props
	const { recipeList, activeId } = props;

	// Skapa en lista för ingredients
	const ingredientsList = [];

	// Hitta det aktuella receptet med hjälp av activeId
	const currentRecipe = recipeList.find((recipe) => recipe.idMeal === activeId);

	// Kontrollera om ett recept hittas
	if (currentRecipe) {
		// Filtrera ut ingredienser och lägg till i ingredientsList
		Object.keys(currentRecipe)
			.filter((key) => key.startsWith("strIngredient"))
			.forEach((ingredientKey) => {
				// Hämta ingrediensvärdet
				const ingredient = currentRecipe[ingredientKey];
				// Kontrollera att ingrediensen inte är tom
				if (ingredient) {
					// Lägg till ingrediensen i ingredientsList
					ingredientsList.push(ingredient);
				}
			});
	} else {
		// Om inget recept hittas med angivet id
		console.warn("No recipe found with the given ID:", activeId);
	}

	// Returnera en lista med ingredienser eller ett meddelande om inga ingredienser hittas
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