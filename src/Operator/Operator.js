import React from "react";

class Operator extends React.Component {
  state = {
    a: 5,
    b: 3
  };
  render() {
    const Add = this.state.a + this.state.b;
    return (
      <div>
        {"Add: " + Add}
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
