import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                <Route path="/" element={<h1>Welcome to Recipe Manager and AddRecipeForm </h1>} />
            </Routes>
        </Router>
    );
};

export default App;
