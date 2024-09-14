import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching the recipes:', error));
  }, []);
 
  return (
    <div>
      <h1 className='text-blue-500 text-3xl grid justify-items-center'>Recipe List</h1>
      <ul>
        <li><Link to = "/" >Recipes</Link></li>
        <li><Link to = "/recipe/:id" >Recipes Details</Link></li>
        </ul> 
      <div className='pt-10 flex items-center flex flex-wrap grid grid-cols-3 gap-12 grid justify-items-center sm:grid grid-cols-2 gap-10'>
        {users.map(user => (
          <div className='bg-gray-400 rounded p-12 hover:shadow-xl'key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// 'https://jsonplaceholder.typicode.com/users'