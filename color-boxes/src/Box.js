import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState((curState) => {
      let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      const actualColor = curState.color;
      while (actualColor === newColor) {
        newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      }
      return { color: newColor };
    });
  }
  render() {
    return (
      <div
        className="Box"
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Box;
