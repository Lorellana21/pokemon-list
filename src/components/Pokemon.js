import React from "react";

const Pokemon = (props) => {
  const renderTypes = () => {
    //console.log(props.item.url);

    return props.item.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
  };

  return (
    <>
      <article>
        <img src={props.item.url} alt="Pokemon" />
        <h2 className="poke__title">{props.item.name}</h2>
        <h4 className="poke__types">{props.item.types}</h4>
        <ul>{renderTypes()}</ul>
      </article>
    </>
  );
};

export default Pokemon;
