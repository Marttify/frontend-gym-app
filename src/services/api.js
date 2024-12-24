import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Actualiza la URL base para el backend correcto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
