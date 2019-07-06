import React from "react";

class Rectangle extends React.Component {
  state = {
    length: 5,
    bredth: 3
  };
  changeLength = e => {
    const inputValue = e.target.value;
    this.setState({
      length: parseInt(inputValue)
    });
  };
  changeBredth = e => {
    const inputValue = e.target.value;
    this.setState({
      bredth: parseInt(inputValue)
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.changeLength} />
        <input onChange={this.changeBredth} />
        <br /> length = {this.state.length} <br />
        bredth = {this.state.bredth} <br />
        Reactangle area = {this.state.length * this.state.bredth} <br />
        Reactangle Perimeter = {2 * (this.state.length + this.state.bredth)}
      </div>
    );
  }
}

export default Rectangle;
