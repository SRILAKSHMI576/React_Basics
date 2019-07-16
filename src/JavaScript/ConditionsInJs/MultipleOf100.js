import React from "react";

class MultipleOf100 extends React.Component {
  state = {
    a: 100
  };
  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };

  divisibleBy100 = () => {
    if (this.state.a % 100 == 0) {
      return "true";
    } else {
      return "false";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        {this.state.a} is
        {this.divisibleBy100()}
      </div>
    );
  }
}

export default MultipleOf100;
