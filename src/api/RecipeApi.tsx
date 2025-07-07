import axios from 'axios';
import { Recipe } from '../Interfaces/Recipe';

const API_BASE_URL = 'https://localhost:7274';

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get<Recipe[]>(`${API_BASE_URL}/Recipe`);
  return response.data;
};