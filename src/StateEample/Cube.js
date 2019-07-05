import React from "react";

class Cube extends React.Component {
  state = {
    a: 5
  };

  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      a: parseInt(inputValue) ** 3
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.valueA} />a = {this.state.a}
      </div>
    );
  }
}
export default Cube;
