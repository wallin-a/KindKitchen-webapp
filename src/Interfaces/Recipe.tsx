export interface Recipe {
    id: number;
    title: string;
    description: string;
    category: string;
    cookingTime: number;
    servings: number;
    imageUrl: string;
    steps: string[];
    ingredients: {
      name: string;
      quantity: string;
    }[];
  }