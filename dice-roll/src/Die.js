import React from "react";

class Die extends React.Component {
  render() {
    return (
      <div className="Die">
        <img
          src={this.props.src}
          alt="dice"
          className={this.props.rolling ? "rolling" : null}
        />
      </div>
    );
  }
}

export default Die;
