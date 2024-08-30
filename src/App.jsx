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
			<div className="left">
				<h3 className="recipe-header">recipes</h3>
				<ul id="recipes"></ul>
				{recipeList.length > 0 ? (
					recipeList.map((recipe) => (
						<div key={recipe.idMeal}>
							<p>{recipe.strMeal}</p>
							{/* Each meal goes here, extract from components to perform CRUD, example would <TitleImage props={recipe.strMeal recipe.strMealThumb} > */}
						</div>
					))
				) : (
					<p>No recipes found.</p>
				)}
			</div>

			<div className="right">
				<div className="inner-container-row">
					<div className="inner-left">
						<div className="rc-header">
							<h1 id="display-title">Title</h1>
						</div>
						{/* <!-- Stars and rating code start ozay --> */}
						<div id="rating-container"></div>
						{/* <!-- Stars and rating code end ozay --> */}
						<div className="rc-info">
							<Ingredients />
						</div>
						<div>
							<h3>Instructions</h3>
							<p id="display-instructions">instructions</p>
						</div>
					</div>
					<div className="rc-img">
						<img />
					</div>
				</div>
			</div>
			<div className="addnew" id="addnew">
				<h2>Add new recipe</h2>
				<form id="form">
					<label for="input-title">Title</label>
					<input type="text" id="input-title" placeholder="Title of the recipie" />
					<label for="input-ingredients">Ingredients</label>
					<input type="text" id="input-ingredients" placeholder="Comma seperated ingredients" />
					<label for="input-instructions">Instructions:</label>
					<input type="text" id="input-instructions" placeholder="Enter instructions" />
					<label for="input-image">Image name:</label>
					<input type="text" id="input-image" placeholder="image-5, image-6" />
					<button type="submit" id="new-recipe-button">
						Add now!
					</button>
					<small id="input-warning"></small>
				</form>
			</div>
		</>
	);
}

export default App;
