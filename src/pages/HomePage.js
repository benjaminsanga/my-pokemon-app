import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import { fetchAllPokemon, fetchPokemonDetail } from '../components/PokemonService';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const navigate = useNavigate ();
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(20);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllPokemon(offset);
        setPokemons(data?.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [offset]);

  const handlePokemonClick = (pokemonURL) => {
    let id = pokemonURL?.split('/')[6];
    navigate(`/pokemon/${id}`);
  };

  const onSearch = async (term) => {
    if (term === '') {
      return;
    }

    setIsSearch(true);

    try {
      const data = await fetchPokemonDetail(term);
      setPokemons([{
        name: data?.species?.name,
        url: data?.species?.url
      }]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-5 mb-4 text-center home-page">
      <h1>Pokémon List</h1>
      <SearchBar onSearch={onSearch}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
      )}

      {!isSearch &&
      <>
        <button onClick={() => {
          if (offset <= 20) { return; }
          setOffset(offset - 20)
          }}>Previous</button>
        <button onClick={() => setOffset(offset + 20)}>Next</button>
      </>
      }
      
    </div>
  );
};

export default HomePage;
