import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../Interfaces/Recipe";
import { getRecipeById } from "../api/RecipeApi";
import LinkToHomePage from "../components/LinkToHomePage";
import { CheckCircleIcon, HeartIcon } from '@heroicons/react/24/outline';


const RecipePage = () => {

    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (!id) {
                    setError("No recipe ID provided.");
                    setLoading(false);
                    return;
                }
                const data = await getRecipeById(parseInt(id));
                setRecipe(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load recipe.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div className="p-6 text-center">Loading recipe...</div>;
    }

    if (error) {
        return <div className="p-6 text-center text-red-500">{error}</div>;
    }

    if (!recipe) {
        return <div className="p-6 text-center">Recipe not found.</div>;
    }
    
    return (
        <div className="max-w-3xl mx-auto p-10">

            <LinkToHomePage />

            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-2 text-gray-700">{recipe.description}</p>
            <div className="mb-4 text-gray-600">
                <span className="mr-4">Category: {recipe.category}</span>
                <span className="mr-4">Cooking time: {recipe.cookingTime} min</span>
                <span>Servings: {recipe.servings}</span>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>

            <ul className="space-y-1 mb-6">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <HeartIcon className="w-5 h-5 mt-0.5" />
                        <span>{ingredient.quantity} {ingredient.name}</span>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal list-inside space-y-2">
            {recipe.steps.map((step, index) => (
                <li key={index}>
                    {step.instruction}
                </li>
            ))}
            </ol>
        </div>
    )
}

export default RecipePage;