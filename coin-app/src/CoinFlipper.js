import React from "react";
import Coin from "./Coin";

class CoinFlipper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "https://image.flaticon.com/icons/svg/2476/2476231.svg",
      numFlips: 0,
      numDogs: 0,
      numCats: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    let side;
    let isDog;
    if (Math.random() < 0.5) {
      //dog
      side = "https://image.flaticon.com/icons/svg/3056/3056913.svg";
      isDog = true;
    } else {
      //cat
      side = "https://image.flaticon.com/icons/svg/3056/3056915.svg";
      isDog = false;
    }
    this.setState((curState) => {
      let dogCount = curState.numDogs;
      let catCount = curState.numCats;
      let flipCounter = curState.numFlips + 1;
      if (isDog) {
        dogCount += 1;
      } else {
        catCount += 1;
      }
      return {
        side: side,
        numFlips: flipCounter,
        numDogs: dogCount,
        numCats: catCount,
      };
    });
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Animal Flip</h1>
        <Coin side={this.state.side} />
        <button onClick={this.flipCoin}>Flip</button>
        <p>
          Out of {this.state.numFlips}, {this.state.numDogs} dogs,{" "}
          {this.state.numCats} cats
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
