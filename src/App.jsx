import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";

function App() {
	// Lista med objekt
	const [recipeList, setRecipeList] = useState([]);
	const [activeId, setActiveId] = useState(null)

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
			console.log(recipeList)
		};
		fetchData();
	}, []);

	return (
		<>
			<div>
				<h3>recipes</h3>
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

			<div>
				<div>
					<div>
						<div>
							<h1 id="display-title">Title</h1>
						</div>
						{/* <!-- Stars and rating code start ozay --> */}
						{/* ozay ratings */}
						<div id="rating-container"></div>
						{/* <!-- Stars and rating code end ozay --> */}
						<div>
							{/* <Ingredients props={{recipeList, activeId}} /> */}
						</div>
						<div>
							<h3>Instructions</h3>
							<p id="display-instructions">instructions</p>
						</div>
					</div>
					<div>
						<img />
					</div>
				</div>
			</div>
			{/* Martin -- from and create */}
			<div id="addnew">
				<h2>Add new recipe</h2>
				<form id="form">
					<label htmlFor="input-title">Title</label>
					<input type="text" id="input-title" placeholder="Title of the recipie" />
					<label htmlFor="input-ingredients">Ingredients</label>
					<input type="text" id="input-ingredients" placeholder="Comma seperated ingredients" />
					<label htmlFor="input-instructions">Instructions:</label>
					<input type="text" id="input-instructions" placeholder="Enter instructions" />
					<label htmlFor="input-image">Image name:</label>
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
