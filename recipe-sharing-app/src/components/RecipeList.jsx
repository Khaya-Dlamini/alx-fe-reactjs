import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        filterRecipes(searchTerm);
    }, [searchTerm, filterRecipes]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredRecipes.map((recipe) => (
                    <li key={recipe.id}>
                        {recipe.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
