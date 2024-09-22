// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchUserData(searchParams);
      setSearchResults(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResults.length > 0 && (
        <div className="results-container mt-4">
          <ul className="space-y-4">
            {searchResults.map((user) => (
              <li key={user.id} className="flex items-center space-x-4">
                <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
                <div>
                  <h2 className="text-lg font-bold">{user.login}</h2>
                  <p>Location: {user.location || 'N/A'}</p>
                  <p>Repositories: {user.public_repos || 'N/A'}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;





// // src/components/Search.jsx
// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// const Search = () => {
//   const [username, setUsername] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const handleInputChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);
//     setUserData(null);

//     try {
//       const data = await fetchUserData(username); 
//       setUserData(data); 
//     } catch (err) {
//       setError(err.message); 
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <div className="search-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Conditional Rendering */}
//       {loading && <p>Loading/ login...</p>}
//       {error && <p>Looks like we cant find the user</p>}
//       {userData && (
//         <div className="user-info">
//           <img src={userData.avatar_url} alt="User Avatar" width="100" />
//           <h2>{userData.name}</h2>
//           <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
//             Visit GitHub Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
