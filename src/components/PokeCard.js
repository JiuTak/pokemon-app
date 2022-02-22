import React from "react";
import "../App.scss";

import { Link } from "react-router-dom";

export default function PokeCard({ pokemon }) {
  return (
    <>
      <div className="pokecard">
        <div className="pokecard-upper-part">
          <div className="pokecard-img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="pokecard-name">{pokemon.name}</div>
          <div className="pokecard-info">
            <div className="pokecard-data pokecard-data-weight">
              <p className="title">Weight</p>
              <p>{pokemon.weight}</p>
            </div>
            <div className="pokecard-data pokecard-data-weight">
              <p className="title">Height</p>
              <p>{pokemon.height}</p>
            </div>
            <div className="pokecard-data pokecard-data-ability">
              <p className="title">Ability </p>
              <p>{pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
        </div>
        <div className="pokecard-under-part">
          <button className="see-detail-button">
            <Link to={`/detailed-pokemon/${pokemon.id}`} key={pokemon.id}>
              <div className="details-part">See Details</div>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
