import axios from 'axios';

export const axiosDb = axios.create({
  baseURL: 'https://my-birthday-api.onrender.com/db',
  // baseURL: 'http://localhost:8000/db', // Cambia la URL según sea necesario
});
