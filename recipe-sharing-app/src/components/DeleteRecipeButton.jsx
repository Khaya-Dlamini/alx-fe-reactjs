import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe } from './store/deleteRecipe';

const DeleteRecipeButton = ({ id }) => {
    const DeleteRecipe = deleteRecipe(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        DeleteRecipe(id);
        navigate('/recipes'); // Redirect to the recipes list after deletion
    };

    return (
        <button onClick={handleDelete}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
