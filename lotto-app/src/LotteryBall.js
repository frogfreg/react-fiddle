import React from "react";
class LotteryBall extends React.Component {
  static defaultProps = {
    number: 0,
  };
  render() {
    return (
      <div className="LotteryBall">
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}
export default LotteryBall;
