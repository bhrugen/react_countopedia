import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Counter></Counter>
  </div>
);
