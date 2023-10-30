import React from 'react';
import './PokemonDetail.css';

const PokemonDetail = ({ pokemon }) => {

  return (
    <div className="container pokemon-detail">
      <div className='row'>
        <h2 className='mb-4'>{pokemon.name?.toUpperCase()}</h2>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} className='pokemon-image' />
        </div>
        <div className='col-md-4'>
          <p className='pokemon-desc'><strong>Species:</strong> {pokemon?.species?.name}</p>
          <p className='pokemon-desc'><strong>Height:</strong> {pokemon?.height}</p>
          <p className='pokemon-desc'><strong>Weight:</strong> {pokemon?.weight}</p>
          <p className='pokemon-desc'><strong>Abilities:</strong> {pokemon?.abilities?.map(({ability}, index) => {
            return <span key={index}>{ability?.name} {index !== pokemon?.abilities?.length - 1 ? ', ' : ''} </span>
          })}</p>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  );
};

export default PokemonDetail;
