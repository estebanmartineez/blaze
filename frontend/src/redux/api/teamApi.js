import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/teams`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching teams:', error.message);
  }
};
