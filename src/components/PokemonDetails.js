import React, { useEffect, useState } from "react";
import { getPokemon } from "./Pokemon";

export default function PokemonDetails(props, { pokemon }) {
  const [detailPokemon, setDetailPokemon] = useState({});

  console.log(props.pokemon);

  // useEffect(() => {
  //   fetchPokemon();
  // }, []);

  // const fetchPokemon = async (data) => {
  //   return new Promise((resolve, reject) => {
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         resolve(data);
  //       });
  //   });
  // };
  return (
    <div className="details-part">
      See Details
      {pokemon}
    </div>
  );
}
