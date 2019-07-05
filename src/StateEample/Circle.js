import React from "react";

class Circle extends React.Component {
  state = {
    radius: 5
  };
  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      raidus: parseInt(inputValue)
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.valueA} />
        <br /> Radius = {this.state.radius} <br />
        Circle area = {Math.PI * this.state.radius * this.state.radius} <br />
        Circle Perimeter = {2 * Math.PI * this.state.radius}
      </div>
    );
  }
}

export default Circle;
