import React from "react";

class Rectangle extends React.Component {
  state = {
    length: 5,
    bredth: 3
  };
  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      length: parseInt(inputValue)
    });
  };
  valueB = e => {
    const inputValue = e.target.value;
    this.setState({
      bredth: parseInt(inputValue)
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.valueA} />
        <input onChange={this.valueB} />
        <br /> length = {this.state.length} <br />
        bredth = {this.state.bredth} <br />
        Reactangle area = {this.state.length * this.state.bredth}
        Reactangle Perimeter = {}
      </div>
    );
  }
}

export default Rectangle;
