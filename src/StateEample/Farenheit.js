import React from "react";

class Farenheit extends React.Component {
  state = {
    fahrenheit: 100
  };
  changeFahrenheit = e => {
    const inputValue = e.target.value;
    this.setState({
      fahrenheit: parseInt(inputValue)
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.changeFahrenheit} />
        <br /> Farenheit = {this.state.fahrenheit} <br />
        Celsius = {((this.state.fahrenheit - 32) * 5) / 9}
      </div>
    );
  }
}

export default Farenheit;
