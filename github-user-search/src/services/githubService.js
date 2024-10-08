// import axios from 'axios';

// export const fetchUserData = async ({ username, location, minRepos }) => {
//   try {
//     let query = `q=${username ? username + ' ' : ''}`;
//     if (location) {
//       query += `location:${location} `;
//     }
//     if (minRepos) {
//       query += `repos:>${minRepos} `;
//     }

//     const response = await axios.get(`https://api.github.com/search/users?q${query}`);
//     return response.data.items; 
//   } catch (error) {
//     throw new Error('Error fetching users');
//   }
// };


















import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; 
  } catch (error) {
    throw new Error('Looks like we cant find the user');
  }
};
