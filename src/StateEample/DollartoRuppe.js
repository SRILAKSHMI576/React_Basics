import React from "react";

class DollartoRuppe extends React.Component {
  state = {
    a: 5,
    b: 2,
    valueSum: 0
  };
  ValueA = e => {
    const inputValue = e.target.value;
    this.setState({
      a: parseInt(inputValue)
    });
  };
  ValueB = e => {
    const inputValue = e.target.value;
    this.setState({
      b: parseInt(inputValue)
    });
  };

  render() {
    return (
      <div>
        <input placeholder="enter dollar value" onChange={this.ValueA} />
        <input placeholder="enter rupee value" onChange={this.ValueB} />
        <br />a = {this.state.a} <br /> b = {this.state.b} <br />
        Dollar to Ruppe = {this.state.a * this.state.b}
      </div>
    );
  }
}
export default DollartoRuppe;
