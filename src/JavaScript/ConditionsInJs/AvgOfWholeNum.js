import React from "react";

class AvgOfWholeNum extends React.Component {
  state = {
    a: [3, 5, 9]
  };
  changeNum = e => {
    this.setState({
      a: e.target.value
    });
  };
  averageOfWholeNumber = () => {
    return Number.isInteger(this.a.reduce((x, y) => x + y) / this.a.length);
  };
  render() {
    return (
      <div>
        <input onChange={this.changeNum} />
        {this.state.a} <br />
        {this.averageOfWholeNumber()}
      </div>
    );
  }
}

export default AvgOfWholeNum;
