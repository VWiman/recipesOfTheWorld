// --- Viktors code - shown to everyone ---

const fetchApiData = async (setRecipeList) => {
	const recipes = [];
	try {
		const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American");
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}

		const result = await response.json();

		if (result && result.meals) {
			const fetchPromises = result.meals.map(async (meal) => {
				const id = meal.idMeal;
				try {
					const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
					const result = await response.json();
					if (result && result.meals) {
						result.meals[0].rating = 0;
						recipes.push(result.meals[0]);
					}
				} catch (error) {
					console.log(error);
				}
			});
			
			await Promise.all(fetchPromises);
			setRecipeList(recipes);
		}
	} catch (error) {
		console.error("Failed to fetch data:", error);
	}
};

export default fetchApiData;