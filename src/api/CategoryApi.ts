import axios from "axios";
import { API_BASE_URL } from "../utilities/constants";
import { Category } from "../Interfaces/Category";


export const getCategoryWithRecipes = async (id: number): Promise<Category> => {
  const response = await axios.get<Category>(`${API_BASE_URL}/Category/${id}/with-recipes`);
  return response.data;
};