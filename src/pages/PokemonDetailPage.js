import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../components/PokemonService';
import PokemonDetail from '../components/PokemonDetail';

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { id: pokemonId } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (!pokemonId) {
        return;
      }
      try {
        const data = await fetchPokemonDetail(pokemonId);
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon detail:', error);
        // Handle error here, e.g., show an error message
        setIsLoading(false);
      }
    }

    fetchData();
  }, [pokemonId]);

  console.log(pokemon, 'pokemon');

  return (
    <div className="pokemon-detail-page">
      <h1>Pokémon Detail</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </div>
  );
};

export default PokemonDetailPage;
