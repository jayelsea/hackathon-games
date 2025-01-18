import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAWG_API_KEY; // Accediendo a la clave de la API
const BASE_URL = 'https://api.rawg.io/api/games';

// Función para obtener juegos
export const fetchGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener los juegos:', error);
    throw error;
  }
};

// Función para buscar juegos
export const searchGames = async (query) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error al buscar juegos:', error);
    throw error;
  }
};
