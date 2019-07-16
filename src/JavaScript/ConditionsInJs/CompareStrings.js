import React from "react";

class CompareStringsBySumOfCharacters extends React.Component {
  state = {
    str1: "AB",
    str2: "CD"
  };
  changeAString = e => {
    this.setState({
      str1: e.target.value
    });
  };
  changeBString = e => {
    this.setState({
      str2: e.target.value
    });
  };
  compareStrings = () => {
    if (this.state.str1.length == this.state.str2.length) {
      return "true";
    } else {
      return "false";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeAString} />
        {this.state.str1}
        <input onChange={this.changeBString} />
        {this.state.str2}
        <br /> <br />
        {this.compareStrings()}
      </div>
    );
  }
}

export default CompareStringsBySumOfCharacters;
