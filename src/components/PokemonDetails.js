import React from "react";

export default function PokemonDetails({ pokemon }) {
  console.log(pokemon);

  return (
    <>
      <div>
        <button>Back</button>
      </div>
      <div className="pokemon-details-container">
        <div className="detail-pokemon-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="detail-pokemon-name">
          <p>{pokemon.name}</p>
        </div>
        <div className="detail-highlight">
          <div className="detail-content">
            <p>Height: {pokemon.height} </p>
          </div>
          <div className="detail-content">
            <p>Weight: {pokemon.weight}</p>
          </div>
          <div className="detail-content">
            <p>Base Experience: {pokemon.base_experience}</p>
          </div>
          <div className="detail-content">
            <p>Default: {pokemon.height}</p>
          </div>
          <div className="detail-content">
            <p>Order: {pokemon.height}</p>
          </div>
          <div className="detail-content">
            <p>Species: {pokemon.height}</p>
          </div>
        </div>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Abilities
          </option>
          <option className="detail-abilities" value="Abilities">
            {pokemon.abilities[0].ability.name}
          </option>
        </select>
        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Forms
          </option>
          <option className="detail-abilities" value="Forms">
            {pokemon.forms[0].name}
          </option>
        </select>
        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Types
          </option>
          <option className="detail-abilities" value="Types">
            {pokemon.types[0].type.name}
          </option>
        </select>
        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Game Indices
          </option>
          <option className="detail-abilities" value="Game-Indices">
            {pokemon.game_indices[0].version.name}
          </option>
        </select>
        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Stats
          </option>
          <option className="detail-abilities" value="Stats">
            {/* {pokemon.stats[0]} */}
          </option>
        </select>
        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Moves
          </option>
          <option className="detail-abilities" value="Moves">
            {/* {pokemon.moves[0]} */}
          </option>
        </select>
      </div>
    </>
  );
}
