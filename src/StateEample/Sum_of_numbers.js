import React from "react";

class Sum_of_natural_numbers extends React.Component {
  state = {
    a: 5
  };
  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      a: inputValue
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

export default Sum_of_natural_numbers;
