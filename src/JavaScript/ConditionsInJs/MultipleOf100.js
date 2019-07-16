import React from "react";

class MultipleOf100 extends React.Component {
  state = {
    num: 100
  };
  changeNum = e => {
    this.setState({
      num: e.target.value
    });
  };

  divisibleBy100 = () => {
    if (this.state.num % 100 == 0) {
      return "true";
    } else {
      return "false";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeNum} />
        {this.state.num} is
        {this.divisibleBy100()}
      </div>
    );
  }
}

export default MultipleOf100;
