import React from "react";

class Square extends React.Component {
  state = {
    a: 5
  };

  valueA = e => {
    const inputValue = e.target.value;
    this.setState({
      a: parseInt(inputValue) ** 2
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.valueA} />
        <br />a = {this.state.a} <br />
      </div>
    );
  }
}
export default Square;
