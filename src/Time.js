import React from "react";

function Time() {
  const element = <h1>It is {new Date().toLocaleTimeString()}</h1>;
  return <div>{element}</div>;
}
setInterval(Time, 1000);

export default Time;
