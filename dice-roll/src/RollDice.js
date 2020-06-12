import React from "react";
import Die from "./Die";

class RollDice extends React.Component {
  static defaultProps = {
    sides: [
      "https://image.flaticon.com/icons/svg/459/459485.svg",
      "https://image.flaticon.com/icons/svg/459/459487.svg",
      "https://image.flaticon.com/icons/png/512/459/459545.png",
      "https://image.flaticon.com/icons/png/512/459/459495.png",
      "https://image.flaticon.com/icons/svg/459/459493.svg",
      "https://image.flaticon.com/icons/png/512/459/459486.png",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "https://image.flaticon.com/icons/svg/459/459485.svg",
      die2: "https://image.flaticon.com/icons/svg/459/459485.svg",
      rolling: false,
    };
  }
  roll = () => {
    const idx1 = Math.floor(Math.random() * this.props.sides.length);
    const idx2 = Math.floor(Math.random() * this.props.sides.length);
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);

    this.setState({
      die1: this.props.sides[idx1],
      die2: this.props.sides[idx2],
      rolling: true,
    });
  };
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-grid">
          <Die src={this.state.die1} rolling={this.state.rolling} />
          <Die src={this.state.die2} rolling={this.state.rolling}/>
        </div>
        <button
          onClick={this.roll}
          disabled={this.state.rolling ? true : false}
          style={this.state.rolling ? { cursor: "not-allowed" } : null}
        >
          {this.state.rolling ? "rolling dice..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
