import React from "react";

function PresentTime() {
  // PRINT WITH NAMES;
  //   const firstName = "Srilakshmi";
  //   const secondName = "srinivas";
  //   return <div>Hello {firstName + " " + secondName}</div>;
  //    KNOW PRESENT DATE;
  //   const date = new Date();
  //   return <div> Time {date.getHours() % 12} o' clock!</div>;
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return <hi>Good {timeOfDay}</hi>;
}

export default PresentTime;
