export default function Ingredients({ props }) {
	const { recipeList, activeId } = props;
    const ingredientsList = [];
    

	const currentRecipe = recipeList.find((recipe) => recipe.idMeal === activeId);


	if (currentRecipe) {
		Object.keys(currentRecipe)
			.filter((key) => key.startsWith("strIngredient"))
			.forEach((ingredientKey) => {
				const ingredient = currentRecipe[ingredientKey];
				if (ingredient) {
					ingredientsList.push(ingredient);
				}
			});
	} else {
		console.warn("No recipe found with the given ID:", activeId);
	}

	return (
		<div>
			{ingredientsList.length > 0 ? (
				ingredientsList.map((ingredient, index) => <p key={index}>{ingredient}</p>)
			) : (
				<p>No ingredients found.</p>
			)}
		</div>
	);
}
