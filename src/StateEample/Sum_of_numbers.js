import React from "react";

class Sum_of_natural_numbers extends React.Component {
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
        <input onChange={this.valueA} /> <br />a = {this.state.a}
        <br />
        Sum of numbers = {(this.state.a * (this.state.a + 1)) / 2}
      </div>
    );
  }
}

export default Sum_of_natural_numbers;
