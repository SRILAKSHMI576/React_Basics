import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";
import { thisExpression } from "@babel/types";

class UdemyAssignment extends React.Component {
  state = {
    person: [{ user: "john" }]
  };

  changeHandler = e => {
    this.setState({
      person: [{ user: e.target.value }]
    });
  };
  render() {
    const { person } = this.state;
    console.log(person);
    return (
      <div>
        <UserInput userName={person[0].user} changeA={this.changeHandler} />

        <UserOutput userName={person[0].user} />
      </div>
    );
  }
}

export default UdemyAssignment;
