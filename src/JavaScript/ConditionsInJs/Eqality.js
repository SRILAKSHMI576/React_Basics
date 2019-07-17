import React from "react";

class Eqality extends React.Component {
  state = {
    a: 5,
    b: 3,
    c: 5
  };
  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };
  changeB = e => {
    this.setState({
      b: e.target.value
    });
  };
  changeC = e => {
    this.setState({
      c: e.target.value
    });
  };
  equalOfNumbers = () => {
    if (
      this.state.a == this.state.b &&
      this.state.a == this.state.c &&
      this.state.b == this.state.c
    ) {
      return 3;
    } else if (
      this.state.a == this.state.b ||
      this.state.a == this.state.c ||
      this.state.b == this.state.c
    ) {
      return 2;
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        a: {this.state.a}
        <input onChange={this.changeB} />
        b: {this.state.b}
        <input onChange={this.changeC} />
        c: {this.state.c}
        <br />
        {this.equalOfNumbers()}
      </div>
    );
  }
}
export default Eqality;
