import axios from 'axios';

const createUser = async (data) => {
  const response = await axios.post('/api/signup', { params: data });
  return response.data;
};

const fetchUser = async (userId) => {
  const response = await axios.get('http://localhost:5173/api/user', { params: { userId } });
  return response.data;
};

export default {
  createUser,
  fetchUser,
};
