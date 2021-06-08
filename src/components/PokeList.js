import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeItems = props.data.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul>{pokeItems}</ul>;
};

export default PokeList;
