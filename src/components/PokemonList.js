import React from 'react';
import './PokemonList.css'

const PokemonList = ({ pokemons, onPokemonClick }) => {

  return (
    <div className="container m-0 pokemon-list">
      <div className='row d-flex flex-row justify-content-center align-items-center'>
        {pokemons?.map((pokemon, index) => (
          <div key={index} onClick={() => onPokemonClick(pokemon.url)} className="col-md-3">
            <div className='p-3 my-3 pokemon-item'>
              <h3>{pokemon.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
