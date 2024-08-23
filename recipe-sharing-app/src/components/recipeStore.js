import create from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    filteredRecipes: [],

    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.recipes, newRecipe],
    })),

    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id),
        filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
    })),

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
        filteredRecipes: state.filteredRecipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
    })),

    filterRecipes: (setSearchTerm) => set((state) => ({
      searchTerm: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(setSearchTerm.toLowerCase())
        ),
    })),
}));

export  {useRecipeStore};
