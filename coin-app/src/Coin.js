import React from "react";

class Coin extends React.Component {
  static defaultProps = {
    side: "https://www.vippng.com/png/full/418-4184974_monedas-de-diez.png",
  };
  render() {
    return (
      <div className="Coin">
        <img src={this.props.side} />
      </div>
    );
  }
}

export default Coin;
