import React from "react";

class EvenOrOdd extends React.Component {
  state = {
    a: 5,
    b: 10
  };

  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };
  changeB = e => {
    this.setState({
      b: e.target.value
    });
  };
  evenOrodd = () => {
    if (this.state.a % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  greaterThan10OrNot = () => {
    if (this.state.b > 10) {
      return "greatherthan 10";
    } else {
      return "not greatherthan 10";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        <input onChange={this.changeB} />
        {this.state.a}
        {this.evenOrodd()}
        <br />
        {this.state.b}
        {this.greaterThan10OrNot()}
      </div>
    );
  }
}

export default EvenOrOdd;
