import React from "react";

function JavascriptBasics() {
  var a = 5;
  var name = "sri";
  var b = 6;
  var add = a + b;
  var sub = a - b;
  var mul = a * b;
  var div = a / b;
  var str = name + name;
  return (
    <div>
      a = {a}
      <br />
      hello {name}
      <br /> b = {b}
      <br />a + b = {add}
      <br />a - b = {sub}
      <br /> a*b = {mul}
      <br /> a / b = {div}
      <br /> string = {str}
    </div>
  );
}
export default JavascriptBasics;
