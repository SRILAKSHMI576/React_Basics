import React from "react";

class Farenheit extends React.Component {
  state = {
    fahrenheit: 100
  };
  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      fahrenheit: parseInt(inputValue)
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.valueA} />
        <br /> Farenheit = {this.state.fahrenheit} <br />
        Celsius = {((this.state.fahrenheit - 32) * 5) / 9}
      </div>
    );
  }
}

export default Farenheit;
