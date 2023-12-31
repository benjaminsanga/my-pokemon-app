import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchAllPokemon = async (offset) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/?offset=${offset}&limit=20`);
    return response.data;
  } catch (error) {
    // Handle error here (e.g., show an error message)
    throw error;
  }
};

export const fetchPokemonDetail = async (pokemonId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${pokemonId}`);
    return response.data;
  } catch (error) {
    // Handle error here (e.g., show an error message)
    throw error;
  }
};

export const searchPokemon = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search?term=${searchTerm}`);
    return response.data;
  } catch (error) {
    // Handle error here (e.g., show an error message)
    throw error;
  }
};
