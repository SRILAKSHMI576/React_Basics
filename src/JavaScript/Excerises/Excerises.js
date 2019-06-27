import React from "react";

function Excerises() {
  var n = 5;
  var square = n * n;
  var cube = n * n * n;
  var sum_of_natural_number = (n * (n + 1)) / 2;
  var sum_of_natural_squares = (n * (n + 2) * (2 * n + 1)) / 6;
  var length = 3;
  var bredth = 4;
  var reactangle_area = length * bredth;
  var reactangle_perimeter = 2 * (length + bredth);

  return (
    <div>
      {n} Square = {square}
      <br />
      {n} Cube = {cube}
      <br />
      Sum Of natural {n} numbers = {sum_of_natural_number}
      <br />
      Sum of natural {n} number squares = {sum_of_natural_squares}
      <br />
      Rectangle Area = {reactangle_area}
      <br />
      Rectangle Perimeter = {reactangle_perimeter}
    </div>
  );
}
export default Excerises;
