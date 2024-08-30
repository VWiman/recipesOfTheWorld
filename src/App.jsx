import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";
import CreateRecipe from "./components/CreateRecipe"; // Martin
import RecipeDetails from "./components/RecipeDetails"; // Elias

import Rating from "./components/Rating"; // Rating component import (ozay)

function App() {
  // Lista med objekt
  const [recipeList, setRecipeList] = useState([]);
  const [isEdit, setIsEdit] = useState(false); // Martin
  const [activeId, setActiveId] = useState(null);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetchApiData(setRecipeList);
      console.log(recipeList);
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
    setActiveId(null);
    setIsEdit(false);
    setCurrentRecipe(null);
  };

  const handleEdit = (recipe) => {
    setIsEdit(true);
    setCurrentRecipe(recipe);
  };

  function handleClickItem(recipe) {
    setActiveId(recipe.idMeal);
    setCurrentRecipe(recipe);
  }

  const handleDelete = (idMeal) => {
    const updateList = recipeList.filter((recipe) => recipe.idMeal !== idMeal);
    console.log("Updated list after deletion", updateList);
    setRecipeList(updateList);
  };

  return (
    <>
      <div>
        <h3>recipes</h3>
        <ul id="recipes">
          {recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <li key={recipe.idMeal} onClick={() => handleClickItem(recipe)}>
                <p>{recipe.strMeal}</p>
                {/* Each meal goes here, extract from components to perform CRUD, example would <TitleImage props={recipe.strMeal recipe.strMealThumb} > */}
                {/* Call the Rating component ozay */}
                <Rating
                  mealId={recipe.idMeal}
                  onRatingUpdate={handleRatingUpdate}
                />
                <button onClick={() => handleEdit(recipe)}>Edit</button>
                <button onClick={() => handleDelete(recipe.idMeal)}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      </div>

      <div>
        <div>
          <div>
            {/* <!-- Stars and rating code start ozay --> */}
            {/* ozay ratings */}
            <div id="rating-container"></div>
            {/* <!-- Stars and rating code end ozay --> */}
            <div>
              {activeId ? (
                <RecipeDetails
                  recipeList={recipeList}
                  activeId={activeId}
                  currentRecipe={currentRecipe}
                />
              ) : (
                <p></p>
              )}
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
