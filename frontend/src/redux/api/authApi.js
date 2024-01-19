import axios from 'axios';

const API_BASE_URL = 'http://your-auth-api-base-url';

export const login = async (credentials) => {
  try {
    return await axios.post(`${API_BASE_URL}/login`, credentials);
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const logout = async () => {
  try {
    return {success: true};
  } catch (error) {
    throw new Error('Logout failed');
  }
};
