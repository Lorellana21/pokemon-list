import "../stylesheets/App.scss";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

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

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PokeList;
