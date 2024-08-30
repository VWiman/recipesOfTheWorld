import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";
import CreateRecipe from "./components/CreateRecipe"; // Martin
import RecipeDetails from "./components/RecipeDetails"; // Elias

import Rating from "./components/Rating"; // Rating component import (ozay)

function App() {
	// Lista med objekt
	const [recipeList, setRecipeList] = useState([]);
	const [isEdit, setIsEdit] = useState(false); // Martin
	const [activeId, setActiveId] = useState(null)
	const [currentRecipe, setCurrentRecipe] = useState(null);


	useEffect(() => {
		const fetchData = async () => {
			await fetchApiData(setRecipeList);
			console.log(recipeList)
		};
		fetchData();
	}, []);

// ozay
	const handleRatingUpdate = () => {
		// Re-render the component by updating the state
		setRecipeList([...recipeList]);
	};

// Martin
const handleSave = (newRecipe) => {
    if (isEdit) {
      // Uppdatera det befintliga receptet
      const updatedRecipes = recipeList.map((recipe) =>
        recipe.idMeal === currentRecipe.idMeal
          ? { ...recipe, ...newRecipe }
          : recipe
      );
      setRecipeList(updatedRecipes);
    } else {
      // Lägg till ett nytt recept
      setRecipeList([
        ...recipeList,
        { ...newRecipe, idMeal: performance.now().toString() },
      ]);
    }
    setIsEdit(false);
    setCurrentRecipe(null);
  };

  const handleEdit = (recipe) => {
    setIsEdit(true);
    setCurrentRecipe(recipe);
  };

	return (
		<>
			<div>
				<h3>recipes</h3>
				<ul id="recipes"></ul>
				{recipeList.length > 0 ? (
					recipeList.map((recipe) => (
						<li key={recipe.idMeal}>
							<p>{recipe.strMeal}</p>
							{/* Each meal goes here, extract from components to perform CRUD, example would <TitleImage props={recipe.strMeal recipe.strMealThumb} > */}
							{/* Call the Rating component ozay */}
							<Rating mealId={recipe.idMeal} onRatingUpdate={handleRatingUpdate} />
							<button onClick={() => handleEdit(recipe)}>Edit</button>
						</li>
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
			
			{/* Martin */}
			<div>
        <h2>{isEdit ? "Edit Recipe" : "Add New Recipe"}</h2>
        <CreateRecipe
          isEdit={isEdit}
          recipe={currentRecipe}
          onSave={handleSave}
        />
			</div>
			
		</>
	);
}

export default App;
