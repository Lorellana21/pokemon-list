import React, { useState } from "react";
import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList.js";

const App = () => {
  const [pokemons] = useState(data);
  //console.log(pokemons);
  return (
    <>
      <h1 className="App__title">Mi lista de pokemon</h1>
      <PokeList data={pokemons}></PokeList>
    </>
  );
};

export default App;
