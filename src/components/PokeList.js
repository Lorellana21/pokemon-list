import "../stylesheets/App.scss";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeItems = props.data.map((item, id) => {
    return (
      <li key={id} className="poke__list">
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul className="poke__container">{pokeItems}</ul>;
};

export default PokeList;
