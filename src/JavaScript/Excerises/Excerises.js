import React from "react";

function Excerises() {
  var n = 5;
  var square = n * n;
  var cube = n * n * n;
  var sum_of_natural_number = (n * (n + 1)) / 2;
  var sum_of_natural_squares = (n * (n + 2) * (2 * n + 1)) / 6;

  return (
    <div>
      {n} Square = {square}
      <br />
      {n} Cube = {cube}
      <br />
      Sum Of natural n numbers = {sum_of_natural_number}
      <br />
      Sum of natural n number squares = {sum_of_natural_squares}
    </div>
  );
}
export default Excerises;
