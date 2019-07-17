import React from "react";

class FlipTheBoolean extends React.Component {
  state = {
    boo: 0
  };
  changeBoo = e => {
    this.setState({
      boo: e.target.value
    });
  };
  flipBoolean = () => {
    if (this.boo === "true") {
      return "false";
    }
    if (this.boo === "false") {
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
