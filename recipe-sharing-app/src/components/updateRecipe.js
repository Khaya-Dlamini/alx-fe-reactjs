import create from 'zustand'

const UpdateRecipe = create(set => ({
  recipes: [],
  UpdateRecipe: (updatedrecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedrecipe.id ? updatedrecipe : recipe )
})),
}));
export {UpdateRecipe}