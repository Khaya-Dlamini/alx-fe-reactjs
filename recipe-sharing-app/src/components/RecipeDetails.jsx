// RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import {useRecipeStore} from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            
            {/* Render EditRecipeForm and DeleteRecipeButton */}
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton id={recipeId} />
        </div>
    );
};

export default RecipeDetails;
