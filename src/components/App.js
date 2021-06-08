import React from "react";
import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList.js";
//console.log(data);

const App = () => {
  return (
    <>
      <h1 className="App-title">Mi lista de pokemon</h1>
      <PokeList data={data}></PokeList>
    </>
  );
};

export default App;
