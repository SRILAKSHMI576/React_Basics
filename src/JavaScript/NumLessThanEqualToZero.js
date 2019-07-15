import React from "react";
import EvenOrOdd from "../EvenOrOdd/EvenOrOdd";

class LessThanEqualToZero extends React.Component {
  state = {
    a: 5
  };

  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };

  lessThanEqual = () => {
    if (this.state.a <= 0) {
      return "true";
    } else {
      return "false";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />a is {this.state.a}
        {this.lessThanEqual()}
      </div>
    );
  }
}

export default LessThanEqualToZero;
