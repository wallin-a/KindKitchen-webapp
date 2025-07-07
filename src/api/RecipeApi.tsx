import axios from 'axios';
import { Recipe } from '../Interfaces/Recipe';
import { CreateNewRecipe } from '../Interfaces/CreateNewRecipe';

const API_BASE_URL = 'https://localhost:7274';

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get<Recipe[]>(`${API_BASE_URL}/Recipe`);
  return response.data;
};

export const getRecipeById = async (id: number): Promise<Recipe> => {
    const response = await axios.get<Recipe>(`${API_BASE_URL}/Recipe/${id}`);
    return response.data;
};

export const postRecipe = async (data: CreateNewRecipe) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/Recipe`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};