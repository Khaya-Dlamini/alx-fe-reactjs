import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split('\n').filter((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    setError('');

    console.log({ title, ingredientsList, steps });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      <ul>
        <li><Link to = "/" >Recipes</Link></li>
        <li><Link to = "/recipe/:id" >Recipes Details</Link></li>
        <li> <Link to = '/form'>Add form</Link></li>
        </ul> 
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Ingredients (separate each by a new line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Preparation Steps (separate each by a new line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
