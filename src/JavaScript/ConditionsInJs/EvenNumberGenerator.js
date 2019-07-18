import React from "react";

class EvenNumberGenerator extends React.Component {
  state = {
    num: 8
  };
  changeNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  evenNumber = () => {
    let result = [];
    for (let i = 1; i <= this.num; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    return result;
  };
  render() {
    return (
      <div>
        <input onChange={this.changeNum} />
        {this.state.num}
        <br />
        even numbers: {this.evenNumber()}
      </div>
    );
  }
}

export default EvenNumberGenerator;
