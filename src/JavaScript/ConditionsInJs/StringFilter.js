import React from "react";

class StringFilter extends React.Component {
  state = {
    arr: [[1, 2, 4, "a", "@"]]
  };
  changeArr = e => {
    this.setState({
      arr: e.target.value
    });
  };

  outStringsFromList = () => {
    return this.state.arr.filter(arr => typeof arr === "number");
  };
  render() {
    return (
      <div>
        <input onChange={this.changeArr} />
        a: {this.state.arr} <br />
        number List: {this.outStringsFromList()}
      </div>
    );
  }
}

export default StringFilter;
