import React from "react";
import Box from "./Box";

class BoxContainer extends React.Component {
  render() {
    let content = Array.from({ length: 18 });

    return (
      <div className="BoxContainer">
        {content.map((box) => {
          return <Box />
        })}
      </div>
    );
  }
}

export default BoxContainer;
