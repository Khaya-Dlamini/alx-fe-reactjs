import create from 'zustand'

const deleteRecipe = create(set => ({
  recipes: [],
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
})),
}));
export {deleteRecipe}