// --- Viktors code --- shown to everyone ---

const fetchApiData = async (setRecipeList) => {
	// Skapa en tom array som kommer innehålla recepten
	const recipes = [];
	try {
		// Utför en fetch och hämta alla Amerikanska recept
		const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American");
		// Kontrollera om statuskoden ok i svarsobjektet är false eller true
		if (!response.ok) {
			// Om false så blir det error
			throw new Error(`Error: ${response.status}`);
		}

		// Konvertera JSON-objektet till ett JavaScript-objekt
		const result = await response.json();

		// Om result inte är tom och innehåller meals
		if (result && result.meals) {
			// Mappa igenom alla recept och hämta detaljerad information för varje med hjälp av id
			const fetchPromises = result.meals.map(async (meal) => {
				const id = meal.idMeal;
				try {
					const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
					// Konvertera JSON-objektet till ett JavaScript-objekt
					const result = await response.json();
					// Om result inte är tom och innehåller meals
					if (result && result.meals) {
						result.meals[0].rating = 0; // Tilldela initiala betyget 0
						recipes.push(result.meals[0]);
					}
				} catch (error) {
					console.log(error);
				}
			});
			// Invänta att alla Promise är klara (Det är en array med Promises)
			await Promise.all(fetchPromises);
			// Sätt receptlistan till en lista med de hämtade recepten
			setRecipeList(recipes);
		}
	} catch (error) {
		console.error("Failed to fetch data:", error);
	}
};

export default fetchApiData;