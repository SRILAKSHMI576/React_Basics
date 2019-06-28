import React from "react";

class Operator extends React.Component {
  state = {
    a: 5,
    b: 3
  };
  render() {
    return (
      <div>
        {"Add: " + (this.state.a + this.state.b)}
        <br />
        {"sub: " + (this.state.a - this.state.b)}
        <br />
        {"mul: " + this.state.a * this.state.b}
        <br />
        {"div: " + this.state.a / this.state.b}
      </div>
    );
  }
}
export default Operator;
