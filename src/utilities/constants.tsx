export const ROUTES = {
    HOME: "/",
    NEW_RECIPE: "/new-recipe",
    RECIPE: "/recipe/:id",
    RECIPE_WITH_ID: (id: number) => `/recipe/${id}`,
};

export const API_BASE_URL = 'https://localhost:7274';