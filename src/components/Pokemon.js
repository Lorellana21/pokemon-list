import React, { useState } from "react";
import "../stylesheets/App.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const renderTypes = () => {
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
        <img className="poke__img" src={props.item.url} alt={props.item.name} />
        <h2 className="poke__title">{props.item.name}</h2>
        <ul className="poke__types">{renderTypes()}</ul>
      </article>
    </>
  );
};

Pokemon.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    evolution: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default Pokemon;
