import React from "react";

class Cube extends React.Component {
  state = {
    a: 5
  };

  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      a: parseInt(inputValue)
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.valueA} />a = {this.state.a ** 3}
      </div>
    );
  }
}
export default Cube;
