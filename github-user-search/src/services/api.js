import axios from 'axios';
process.env.REACT_APP_GITHUB_API_KEY

const API_BASE_URL = 'https://api.github.com/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.REACT_APP_GITHUB_API_KEY}`,  // If you have an API key
  },
});

export const getUserData = (username) => {
  return apiClient.get(`/users/${username}`);
};
