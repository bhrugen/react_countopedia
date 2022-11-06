import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div className="row text-white">
        <h1>Counter: </h1>
        <button style={{ width: "200px" }}>+1</button>
        <button style={{ width: "200px" }}>-1</button>
      </div>
    );
  }
}
