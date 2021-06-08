import React, { useState } from "react";
import "../stylesheets/App.scss";

const Pokemon = (props) => {
  const renderTypes = () => {
    //console.log(props.item.types);

    return props.item.types.map((type, index) => {
      return (
        <li className="poke__type" key={index}>
          {type}
        </li>
      );
    });
  };

  return (
    <>
      <article className="poke__card">
        <img src={props.item.url} alt={props.item.name} />
        <h2 className="poke__title">{props.item.name}</h2>
        <ul className="poke__types">{renderTypes()}</ul>
      </article>
    </>
  );
};

export default Pokemon;
