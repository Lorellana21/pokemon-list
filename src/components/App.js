import React, { useState } from "react";
import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList.js";

const App = () => {
  const [pokemons] = useState(data);
  return (
    <>
      <h1 className="App__title">My list of Pokemons</h1>
      <PokeList data={pokemons}></PokeList>
    </>
  );
};

export default App;
