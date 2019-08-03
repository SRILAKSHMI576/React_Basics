import React from "react";
import { sizeHeight } from "@material-ui/system";

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
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "night";
    styles.color = "Pink";
  }

  return <h1 style={styles}>Good {timeOfDay}</h1>;
}

export default PresentTime;
