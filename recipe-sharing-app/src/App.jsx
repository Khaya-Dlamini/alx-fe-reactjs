import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                        <Route path="/recipes" element={<RecipeList />} />
                        <Route path="/" element={<h1>Welcome to Recipe Manager</h1>} />
                    </Routes>
                </div>
                <div style={{ width: '300px', marginLeft: '20px' }}>
                    <FavoritesList />
                    <AddRecipeForm></AddRecipeForm>
                    <RecommendationsList />
                </div>
            </div>
        </Router>
    );
};

export default App;
