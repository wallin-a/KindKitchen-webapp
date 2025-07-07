import { useEffect, useState } from "react";
import { Recipe } from "../Interfaces/Recipe";
import { getRecipes } from "../api/RecipeApi";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from '@heroicons/react/24/outline';


const HomePage = () => {

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
    <div className="max-w-7xl mx-auto p-6">

            <Link to={"/new-recipe"} >
                <div className="pb-4 flex items-center gap-2">
                    <PlusCircleIcon className="w-4 h-4 pl-0"/>
                    <p>add a new recipe</p>
                </div>
            </Link>

        <h2 className="text-3xl font-bold mb-6">Our Favorite Recipes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard 
              id={recipe.id} 
              imageUrl={recipe.imageUrl} 
              title={recipe.title} />
          ))}
        </div>
      </div>
    )
}

export default HomePage;