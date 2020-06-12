import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <h1>
        <Lottery title="Five LOtto" maxNum={100} numBalls={5} />
        <Lottery title="Lucky 3" maxNum={10} numBalls={3} />
      </h1>
    </div>
  );
}

export default App;
