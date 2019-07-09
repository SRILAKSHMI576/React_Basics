import React from "react";
import OutputScreen from "../OutputScreen/OutputScreen";
import GeeksCalButtons from "../GeeksCalButtons/GeeksCalButtons";
import "./Style.css";

function GeekCalculator() {
  return (
    <div>
      <p className="geek-title"> GeeksforGeeks Calculator</p>
      <OutputScreen />
      <OutputScreen />
      <GeeksCalButtons />
    </div>
  );
}

export default GeekCalculator;
