import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";

class UdemyAssignment extends React.Component {
  state = {
    name: "SRINVIAS"
  };
  changeNameHandler = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <div>
        <UserInput
          personName={this.state.name}
          changeA={this.changeNameHandler}
        />

        <UserOutput userName={this.state.name} />
        <UserOutput userName="SRI" />
      </div>
    );
  }
}

export default UdemyAssignment;
