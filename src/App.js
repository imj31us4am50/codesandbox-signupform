import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/formcomponents/Title.js";
import Inputs from "/formcomponents/Inputs.js";
import Checkbox from "/formcomponents/Checkbox.js";

export default function App() {
  return (
    <div className="container-fluid mx-auto pb-3">
      <Title />
      <Inputs />
      <Checkbox />
    </div>
  );
}
