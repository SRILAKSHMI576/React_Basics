import React from "react";

class EvenOdd extends React.Component {
  state = {
    a: 5
  };
  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };

  evenOrOdd = () => {
    if (this.state.a % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        {this.state.a}
        {this.evenOrOdd()}
      </div>
    );
  }
}

export default EvenOdd;
