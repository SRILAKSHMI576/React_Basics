import React from "react";

class XsAndOs extends React.Component {
  state = {
    str: "ooxx"
  };
  changeStr = e => {
    this.setState({
      str: e.target.value
    });
  };
  xsAndOs = () => {
    return (
      this.state.str.toLowerCase().split("x").length ==
      this.state.str.split("o").length
    );
  };
  render() {
    return (
      <div>
        <input onChange={this.changeStr} />
        {this.state.str}
        <br />
        {this.xsAndOs()}
      </div>
    );
  }
}

export default XsAndOs;
