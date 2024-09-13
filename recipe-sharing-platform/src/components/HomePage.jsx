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
      <h1>Recipe List</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
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
