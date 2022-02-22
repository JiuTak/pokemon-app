import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Pokemon from "./components/Pokemon";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Pokemon} />
          <Route
            path="/detailed-pokemon/:id"
            exact
            component={PokemonDetails}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
