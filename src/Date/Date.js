import React from "react";

function PresentTime() {
  //   const firstName = "Srilakshmi";
  //   const secondName = "srinivas";
  //   return <div>Hello {firstName + " " + secondName}</div>;
  const date = new Date();
  return <div> Time {date.getHours() % 12} o' clock!</div>;
}

export default PresentTime;
