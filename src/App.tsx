import React, { useEffect, useState } from "react";
import { getRecipes } from "./api/RecipeApi";
import { Recipe } from "./Interfaces/Recipe";

const App: React.FC = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try{
        const data = await getRecipes();
        setRecipes(data);
      } catch(err) {
        console.error(err)
      }
    }

    fetchRecipes();
  }, [])

  return (

    <>
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 mt-10 underline decoration-dashed font-sans">
        Kind Kitchen
      </h1>
    </div>
    
      <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Our Favorite Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <a
            key={recipe.id}
            className="block bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
    </>

  );
};

export default App;
