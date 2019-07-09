import React from "react";
import OutputScreen from "../OutputScreen/OutputScreen";
import GeeksCalButtons from "../GeeksCalButtons/GeeksCalButtons";

function GeekCalculator() {
  return (
    <div>
      GeeksforGeeks Calculator
      <OutputScreen />
      <OutputScreen />
      <GeeksCalButtons />
    </div>
  );
}

export default GeekCalculator;
