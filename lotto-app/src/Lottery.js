import React from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends React.Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 3,
    maxNum: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.numBalls }),
    };
    this.generateNums = this.generateNums.bind(this);
  }
  generateNums() {
    const rdmNums = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      rdmNums.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }
    this.setState({ numbers: [...rdmNums] });
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-grid">
          {this.state.numbers.map((number) => {
            return <LotteryBall number={number} />;
          })}
        </div>
        <button onClick={this.generateNums}>Generate nums</button>
      </div>
    );
  }
}

export default Lottery;
