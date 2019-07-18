import React from "react";

class FlipTheBoolean extends React.Component {
  state = {
    boo: "true"
  };
  changeBoo = e => {
    this.setState({
      boo: e.target.value
    });
  };
  flipBoolean = () => {
    if (this.state.boo === "true") {
      return "false";
    } else if (this.state.boo === "false") {
      return "true";
    } else {
      return "boolean expected";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeBoo} />
        {this.state.boo}
        <br />
        {this.flipBoolean()}
      </div>
    );
  }
}
export default FlipTheBoolean;
