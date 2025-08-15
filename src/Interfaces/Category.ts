import { Recipe } from "./Recipe";

export interface Category {
    id: number;
    name: string;
    recipes: Recipe[];
}