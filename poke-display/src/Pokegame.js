import React from "react";
import Pokedex from "./Pokedex";

class Pokegame extends React.Component {
  static defaultProps = {
    data: [
      { id: 1, name: "Bulbasaur", type: "Grass/Poison", base_experience: 64 },
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.data];
    while (hand1.length < hand2.length) {
      let randIndex = Math.floor(Math.random() * hand2.length);
      hand1.push(hand2.splice(randIndex, 1)[0]);
    }
    let totalExp1 = hand1.reduce((exp, pokemon) => {
      return exp + pokemon.base_experience;
    }, 0);
    let totalExp2 = hand2.reduce((exp, pokemon) => {
      return exp + pokemon.base_experience;
    }, 0);
    console.log(totalExp1, totalExp2);

    return (
      <div className="Pokegame">
        <Pokedex
          data={hand1}
          totalExp={totalExp1}
          isWinner={totalExp1 > totalExp2}
        />
        <Pokedex
          data={hand2}
          totalExp={totalExp2}
          isWinner={totalExp1 < totalExp2}
        />
      </div>
    );
  }
}

export default Pokegame;
