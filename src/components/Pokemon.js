import React from "react";
import PokeCard from "./PokeCard";
import "../index.css";

export default function Pokemon({
  pokemons,
  prev,
  isLoading,
  next,
  theme,
  setTheme,
}) {
  return (
    <div className="landing-page" theme={theme} setTheme={setTheme}>
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
