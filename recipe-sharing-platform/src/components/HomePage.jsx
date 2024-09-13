import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching the recipes:', error));
  }, []);
 
  return (
    <div>
      <h1 className='text-blue-500 hover:text-blue-300 sm:p-4 md:p-8'>Recipe List</h1>
      <div className='rounded-lg shadow-lg'>
        {recipes.map((recipe) => (
          <div className='sm:p-4 md:p-4' key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
