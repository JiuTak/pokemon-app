import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

//
export async function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

// fetching all pokemons
async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const PokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const next = async () => {
    setIsLoading(true);
    let data = await getAllPokemon(nextPageURL);
    await fetchingPokemon(data.results);
    setNextPageURL(data.next);
    setPreviousPageURL(data.previous);
    setIsLoading(false);
  };

  const prev = async () => {
    if (!previousPageURL) return;
    setIsLoading(true);
    let data = await getAllPokemon(previousPageURL);
    await fetchingPokemon(data.results);
    setNextPageURL(data.next);
    setPreviousPageURL(data.previous);
    setIsLoading(false);
  };

  // to get each pokemon in the array
  const fetchingPokemon = async (data) => {
    let pokemonData = await Promise.all(
      // when it resolve will return the array
      data.map(async (pokemon) => {
        let pokemonDetails = await getPokemon(pokemon); //
        return pokemonDetails;
      })
    );
    setPokemons(pokemonData); // store the fetched data in the react state
  };

  //when component mount the page, it runs
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(PokemonURL);
      setNextPageURL(response.next);
      setPreviousPageURL(response.previous);
      await fetchingPokemon(response.results); //iterate array and fetch data from the endpoint and store in react state
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="landing-page">
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <>
          <div className="pagination-button">
            <button className="button-style" onClick={prev}>
              Previous page
            </button>
            <button
              className="button-style"
              onClick={next}
              style={{ color: "#367AAC " }}
            >
              Next page
            </button>
          </div>
          <div className="pokemon-card-container">
            {pokemons.map((pokemon, i) => {
              return <PokeCard key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="pagination-button">
            <button className="button-style" onClick={prev}>
              Previous page
            </button>
            <button
              className="button-style"
              onClick={next}
              style={{ color: "#367AAC " }}
            >
              Next page
            </button>
          </div>
        </>
      )}
    </div>
  );
}
