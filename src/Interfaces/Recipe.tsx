export interface Recipe {
    id: number;
    title: string;
    description: string;
    category: string;
    cookingTime: number;
    servings: number;
    imageUrl: string;
    steps: Step[];
    ingredients: Ingredient[];
  }


export interface Step {
    stepNumber: number;
    instruction: string;
}

export interface Ingredient {
    name: string;
    quantity: string;
}