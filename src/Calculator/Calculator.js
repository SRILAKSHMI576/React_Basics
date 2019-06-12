import React from "react";
import Numbers from "../Numbers/Numbers";
import Operators from "../Operators/Operators";
import "./style.css";
import ArthimaticOperators from "../Arthematic/Arthimatic";

function Calculator() {
  return (
    <div className="calculator">
      <div className="result">1</div>

      <div className="container">
        <div className="op-num-container">
          <Operators />
          <Numbers />
        </div>
        <ArthimaticOperators />
      </div>
    </div>
  );
}

export default Calculator;
