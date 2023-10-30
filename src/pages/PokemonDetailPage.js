import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
        setIsLoading(false);
      }
    }

    fetchData();
  }, [pokemonId]);

  return (
    <div className="text-center pokemon-detail-page">
      <h1 className='mt-5 mb-0'>Pokémon Detail</h1>
      <p className='mb-5'><Link to={'/'} className="text-decoration-none">Back Home</Link></p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </div>
  );
};

export default PokemonDetailPage;
