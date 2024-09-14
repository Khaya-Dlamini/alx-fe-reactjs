import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching the recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img className="mb-4 w-full max-w-lg" src={recipe.image} alt={recipe.title} />
      <p className="mb-4 text-gray-600">{recipe.summary}</p>
      <div className="bg-white shadow-md p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Assuming recipe.ingredients is an array */}
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-2">Cooking Steps</h2>
        <ol className="list-decimal list-inside">
          {/* Assuming recipe.steps is an array */}
          {recipe.steps && recipe.steps.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;










// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const RecipeDetail = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error('Error fetching the recipes:', error));
//   }, []);
 
//   return (
//     <div>
//       <h1 className='text-blue-500 text-3xl grid justify-items-center'>Recipe Details</h1>
//       <ul>
//         <li><Link to = "/" >Recipes</Link></li>
//         <li><Link to = "/recipe/:id" >Recipes Details</Link></li>
//         </ul> 
//       <div className='pt-10 flex items-center flex flex-wrap grid grid-cols-3 gap-12 grid justify-items-center sm:grid grid-cols-2 gap-10'>
//         {users.map(user => (
//           <div className='bg-gray-400 rounded p-12 hover:shadow-xl'key={user.id}>
//             <h1>{user.name}</h1>
//             <h2>{user.username} </h2>
//             <p>{user.email}</p>
//             <p>{user.address} </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeDetail;


