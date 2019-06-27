import React from "react";

function Excerises() {
  var n = 5;
  var square = n ** 2;
  var cube = n ** 3;
  var sum_of_natural_number = (n * (n + 1)) / 2;
  var sum_of_natural_squares = (n * (n + 2) * (2 * n + 1)) / 6;
  var length = 3;
  var bredth = 4;
  var reactangle_area = length * bredth;
  var reactangle_perimeter = 2 * (length + bredth);
  var width = 6;
  var square_area = width * width;
  var square_perimeter = 4 * width;
  var radius = 2;
  var circle_area = Math.PI * radius * radius;
  var circle_perimeter = 2 * Math.PI * radius;
  var fahrenheit = 100;
  var celsius = ((fahrenheit - 32) * 5) / 9;
  var dollar = 60;
  var ruppe = 3;
  var dollar_to_rupee = dollar * ruppe;
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
      <br />
      Square Area = {square_area}
      <br />
      Square Perimeter = {square_perimeter}
      <br />
      Circle Area = {circle_area}
      <br />
      Circle Perimeter = {circle_perimeter}
      <br />
      Fahrenheit to Celsius = {celsius}
      <br />
      Dollar to Rupee = {dollar_to_rupee}
    </div>
  );
}
export default Excerises;
