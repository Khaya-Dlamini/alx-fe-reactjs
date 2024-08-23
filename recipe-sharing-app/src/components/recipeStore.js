import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

const deleteRecipe = create(set => ({
  recipes: [],
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
})),
}));
const updateRecipe = create(set => ({
  recipes: [],
  UpdateRecipe: (updatedrecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedrecipe.id ? updatedrecipe : recipe )
})),
}));
export {updateRecipe}
export {deleteRecipe}
export {useRecipeStore}
