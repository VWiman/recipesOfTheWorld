import { useState, useEffect } from "react";

function CreateRecipe({ isEdit, recipe, onSave }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

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
    setErrors({}); // Rensa eventuella tidigare felmeddelanden
  }, [isEdit, recipe]);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";
    if (!image.trim()) newErrors.image = "Image URL is required";

    setErrors(newErrors);

    // Returnerar true om inga fel finns
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Avbryt om formuläret inte är giltigt

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
      {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

      <label htmlFor="input-ingredients">Ingredients</label>
      <input
        type="text"
        id="input-ingredients"
        placeholder="Comma separated ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      {errors.ingredients && (
        <p style={{ color: "red" }}>{errors.ingredients}</p>
      )}

      <label htmlFor="input-instructions">Instructions:</label>
      <input
        type="text"
        id="input-instructions"
        placeholder="Enter instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      {errors.instructions && (
        <p style={{ color: "red" }}>{errors.instructions}</p>
      )}

      <label htmlFor="input-image">Image URL:</label>
      <input
        type="text"
        id="input-image"
        placeholder="Enter image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

      <button type="submit">{isEdit ? "Save" : "Add"}</button>
    </form>
  );
}

export default CreateRecipe;
