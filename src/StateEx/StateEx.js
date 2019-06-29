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

  render() {
    return (
      <div>
        <input onChange={this.setA} />
        <input />
        <br />
        {"A:" + this.state.a}
        {" B: " + this.state.b}
        <br />
        {"Square: " + this.state.a ** 2}
      </div>
    );
  }
}

export default StateEx;
