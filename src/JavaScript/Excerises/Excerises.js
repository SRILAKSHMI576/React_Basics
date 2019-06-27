import React from "react";

function Excerises() {
  var n = 5;
  var square = n * n;
  var cube = n * n * n;
  var sum_of_natural = (n * (n + 1)) / 2;

  return (
    <div>
      {m} Square = {square}
      <br />
      {m} Cube = {cube}
      <br />
      {m} Sum Of natural numbers = {sum_of_natural}
    </div>
  );
}
export default Excerises;
