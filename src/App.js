import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import "./App.scss";

async function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("light");

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
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Pokemon
                {...props}
                pokemons={pokemons}
                next={next}
                prev={prev}
                isLoading={isLoading}
                theme={theme}
                setTheme={setTheme}
              />
            )}
          />
          <Route
            path="/detailed-pokemon/:id"
            exact
            render={(props) => (
              <PokemonDetails
                {...props}
                pokemon={pokemons[props.match.params.id - 1]}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
