import React from "react";

class Square extends React.Component {
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
        <input onChange={this.valueA} />
        <br />a = {this.state.a ** 2} <br />
      </div>
    );
  }
}
export default Square;
