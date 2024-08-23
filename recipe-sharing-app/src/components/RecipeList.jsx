import React, { useState, useEffect } from 'react';
import {useRecipeStore} from './recipeStore';
import { Link } from 'react-router-dom';

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
                    <Link>
                    <li key={recipe.id}>
                        {recipe.title}
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
