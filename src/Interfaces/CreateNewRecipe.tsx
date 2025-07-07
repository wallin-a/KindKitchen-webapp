import { Ingredient } from "./Recipe";

export interface CreateNewRecipe {
    title: string;
    description: string;
    category: string;
    cookingTime: number;
    servings: number;
    imageUrl: string;
    steps: string[];
    ingredients: Ingredient[];  
}