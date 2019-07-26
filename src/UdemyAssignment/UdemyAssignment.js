import React from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";

class UdemyAssignment extends React.Component {
  state = {
    username: "SRILAKSHMI"
  };
  changeName = e => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    return (
      <div>
        <UserInput username={this.state.username} changeA={this.changeName} />
        <UserOutput username={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}
export default UdemyAssignment;
