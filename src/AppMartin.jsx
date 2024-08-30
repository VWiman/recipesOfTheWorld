import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";
import CreateRecipe from "./components/CreateRecipe";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetchApiData(setRecipeList);
    };
    fetchData();
  }, []);

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
        <h3>Recipes</h3>
        <ul id="recipes">
          {recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <li key={recipe.idMeal}>
                {recipe.strMeal}
                <button onClick={() => handleEdit(recipe)}>Edit</button>
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      </div>

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
