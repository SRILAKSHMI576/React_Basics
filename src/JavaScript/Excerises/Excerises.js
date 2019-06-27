import React from "react";

function Excerises() {
  var m = 5;
  var square = m * m;
  var cube = m * m * m;
  return (
    <div>
      {m} Square = {square}
      <br />
      {m} Cube = {cube}
    </div>
  );
}
export default Excerises;
