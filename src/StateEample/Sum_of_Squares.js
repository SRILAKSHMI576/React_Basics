import React from "react";

class Sum_of_Squares extends React.Component {
  state = {
    a: 5
  };
  render() {
    return (
      <div>
        <input />
        <br />
        {"a: " + this.state.a}
        <br />
        Sum of Squares =
        {(this.state.a * (this.state.a + 2) * (2 * this.state.a + 1)) / 6}
      </div>
    );
  }
}

export default Sum_of_Squares;
