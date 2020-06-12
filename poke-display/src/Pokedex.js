import React from "react";
import Pokecard from "./Pokecard";
class Pokedex extends React.Component {
  render() {
    return (
      <div className="Pokedex">
        <div className="Pokedex-grid">
          {this.props.data.map((pokemon) => {
            return <Pokecard data={pokemon} />;
          })}
        </div>
        <p>Total exp: {this.props.totalExp}</p>
      </div>
    );
  }
}

export default Pokedex;
