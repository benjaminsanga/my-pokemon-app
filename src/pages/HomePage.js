import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import { fetchAllPokemon } from '../components/PokemonService';

const HomePage = () => {
  const navigate = useNavigate ();
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllPokemon();
        setPokemons(data?.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handlePokemonClick = (pokemonURL) => {
    let id = pokemonURL?.split('/')[6];
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="mt-5 mb-4 text-center home-page">
      <h1>Pokémon List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
      )}
    </div>
  );
};

export default HomePage;
