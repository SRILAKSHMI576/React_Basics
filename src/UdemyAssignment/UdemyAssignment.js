import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";

function UdemyAssignment() {
  return (
    <div>
      <UserInput />
      <UserOutput username="srilakshmi" />
      <UserOutput username="srinivas" />
      <UserOutput username="bujji" />
      <UserOutput username="sri" />
    </div>
  );
}

export default UdemyAssignment;
