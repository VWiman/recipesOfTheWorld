import { useState, useEffect } from "react";

function CreateRecipe({ isEdit, recipe, onSave }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (isEdit && recipe) {
      setTitle(recipe.strMeal || "");
      setIngredients(
        Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key) => recipe[key])
          .join(", ")
      );
      setInstructions(recipe.strInstructions || "");
      setImage(recipe.strMealThumb || "");
    } else {
      // Återställ formuläret när vi inte redigerar
      setTitle("");
      setIngredients("");
      setInstructions("");
      setImage("");
    }
  }, [isEdit, recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      strMeal: title,
      strInstructions: instructions,
      strMealThumb: image,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
    };
    onSave(newRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-title">Title</label>
      <input
        type="text"
        id="input-title"
        placeholder="Title of the recipe"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="input-ingredients">Ingredients</label>
      <input
        type="text"
        id="input-ingredients"
        placeholder="Comma separated ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <label htmlFor="input-instructions">Instructions:</label>
      <input
        type="text"
        id="input-instructions"
        placeholder="Enter instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <label htmlFor="input-image">Image URL:</label>
      <input
        type="text"
        id="input-image"
        placeholder="Enter image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">{isEdit ? "Save" : "Add"}</button>
    </form>
  );
}

export default CreateRecipe;
