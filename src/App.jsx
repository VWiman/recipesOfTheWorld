import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";

function App() {
	// Lista med objekt
	const [recipeList, setRecipeList] = useState([]);

	// Så här ser objektet ut

	// 	 "dateModified": null,
	//   "idMeal": "",
	//   "strArea": "",
	//   "strCategory": "",
	//   "strCreativeCommonsConfirmed": null,
	//   "strDrinkAlternate": null,
	//   "strImageSource": null,
	//   "strIngredient1": "",
	//   "strIngredient2": "",
	//   "strIngredient3": "",
	//   "strIngredient4": "",
	//   "strIngredient5": "",
	//   "strIngredient6": "",
	//   "strIngredient7": "",
	//   "strIngredient8": "",
	//   "strIngredient9": "",
	//   "strIngredient10": "",
	//   "strIngredient11": "",
	//   "strIngredient12": "",
	//   "strIngredient13": "",
	//   "strIngredient14": "",
	//   "strIngredient15": "",
	//   "strIngredient16": "",
	//   "strIngredient17": "",
	//   "strIngredient18": "",
	//   "strIngredient19": "",
	//   "strIngredient20": "",
	//   "strInstructions": "",
	//   "strMeal": "",
	//   "strMealThumb": "",
	//   "strMeasure1": "",
	//   "strMeasure2": "",
	//   "strMeasure3": "",
	//   "strMeasure4": "",
	//   "strMeasure5": "",
	//   "strMeasure6": "",
	//   "strMeasure7": "",
	//   "strMeasure8": "",
	//   "strMeasure9": "",
	//   "strMeasure10": "",
	//   "strMeasure11": "",
	//   "strMeasure12": "",
	//   "strMeasure13": "",
	//   "strMeasure14": "",
	//   "strMeasure15": "",
	//   "strMeasure16": "",
	//   "strMeasure17": "",
	//   "strMeasure18": "",
	//   "strMeasure19": "",
	//   "strMeasure20": "",
	//   "strSource": "",
	//   "strTags": "",
	//   "strYoutube": ""

	useEffect(() => {
		const fetchData = async () => {
			await fetchApiData(setRecipeList);
		};
		fetchData();
	}, []);

	return (
		<>
			{recipeList.length > 0 ? (
				recipeList.map((recipe) => (
					<div key={recipe.idMeal}>
						{/* Each meal goes here, extract from components to perform CRUD, example would <TitleImage props={recipe.strMeal recipe.strMealThumb} > */}
					</div>
				))
			) : (
				<p>No recipes found.</p>
			)}
		</>
	);
}

export default App;
