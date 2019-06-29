import React from "react";

class StateEx extends React.Component {
  state = {
    a: 10,
    b: 5
  };
  setA = e => {
    this.setState({
      a: parseInt(e.target.value)
    });
  };
  setB = e => {
    this.setState({
      b: parseInt(e.target.value)
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.setA} />
        <input onChange={this.setB} />
        <br />
        {"A:" + this.state.a}
        {" B: " + this.state.b}
        <br />
        {"Square: " + this.state.a ** 2}
        {" Cube:" + this.state.b ** 3}
      </div>
    );
  }
}

export default StateEx;
