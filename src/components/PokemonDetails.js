import React from "react";
import { Link } from "react-router-dom";

export default function PokemonDetails({ pokemon }) {
  console.log(pokemon);

  return (
    <>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
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
          {pokemon.abilities.map((ability, i) => {
            return (
              <option key={i} className="detail-abilities" value="Abilities">
                {ability.ability.name}
              </option>
            );
          })}
        </select>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Forms
          </option>
          {pokemon.forms.map((form, i) => {
            return (
              <option key={i} className="detail-abilities" value="Forms">
                {form.name}
              </option>
            );
          })}
        </select>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Types
          </option>
          {pokemon.types.map((type, i) => {
            return (
              <option key={i} className="detail-abilities" value="Types">
                {type.type.name}
              </option>
            );
          })}
        </select>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Game Indices
          </option>
          {pokemon.game_indices.map((game_index, i) => {
            return (
              <option key={i} className="detail-abilities" value="Game-Indices">
                {game_index.version.name}
              </option>
            );
          })}
        </select>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Stats
          </option>
          {pokemon.stats.map((stat, i) => {
            return (
              <option key={i} className="detail-abilities" value="Stats">
                {stat.stat.name}
              </option>
            );
          })}
        </select>

        <select className="detail-select">
          <option className="detail-abilities" disabled selected>
            Moves
          </option>
          {pokemon.moves.map((move, i) => {
            return (
              <option key={i} className="detail-abilities" value="Moves">
                {move.move.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
