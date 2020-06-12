import React from "react";

class Pokecard extends React.Component {
  render() {
    return (
      <div className="Pokecard">
        <h1>{this.props.data.name}</h1>
        <img
          src={
            "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/" +
            this.props.data.name.toLowerCase() +
            ".png"
          }
          alt="pokemon sprite"
        />
        <p>Type: {this.props.data.type}</p>
        <p>EXP: {this.props.data.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
