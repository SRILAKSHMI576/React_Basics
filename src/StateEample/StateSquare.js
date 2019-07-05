import React from "react";

class StateSquare extends React.Component {
  state = {
    width: 5
  };
  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      width: parseInt(inputValue)
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.valueA} />
        <br /> width = {this.state.width} <br />
        Square area = {this.state.width * this.state.width} <br />
        Square Perimeter = {4 * this.state.width}
      </div>
    );
  }
}

export default StateSquare;
