import React from "react";

class Factorial extends React.Component {
  state = {
    num: 9
  };
  changeNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  factorialNum = () => {
    if (this.state.num == 0) {
      return 1;
    } else {
      return this.state.num * (this.state.num - 1);
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeNum} />
        {this.state.num} <br />
        Factorial : {this.factorialNum()}
      </div>
    );
  }
}

export default Factorial;
