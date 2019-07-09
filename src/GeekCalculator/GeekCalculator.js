import React from "react";
import OutputScreen from "../OutputScreen/OutputScreen";
import "./Style.css";

function GeekCalculator() {
  return (
    <div>
      <p className="geek-title"> GeeksforGeeks Calculator</p>
      <OutputScreen />
      <OutputScreen />
    </div>
  );
}

export default GeekCalculator;
