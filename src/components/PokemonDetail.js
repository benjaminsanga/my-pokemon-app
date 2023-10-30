import React from 'react';

const PokemonDetail = ({ pokemon }) => {

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      {/* Display more details here */}
    </div>
  );
};

export default PokemonDetail;
