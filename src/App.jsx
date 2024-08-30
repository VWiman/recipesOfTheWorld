import { useEffect, useState } from "react";
import fetchApiData from "./utils/fetchApiData";

function App() {
	
	const [recipeList, setRecipeList] = useState([]);

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
						{/* Each meal goes here, extract from components to perform CRUD */}
					</div>
				))
			) : (
				<p>No recipes found.</p>
			)}
		</>
	);
}

export default App;
