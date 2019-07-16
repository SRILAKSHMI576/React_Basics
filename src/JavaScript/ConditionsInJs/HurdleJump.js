import React from "react";

class HurdleJump extends React.Component {
  state = {
    hurdles: [1, 2, 3],
    jumpHeight: 5
  };
  changeA = e => {
    this.setState({
      hurdles: e.target.value
    });
  };
  changeB = e => {
    this.setState({
      jumpHeight: e.target.value
    });
  };

  hurdleJump = () => {
    var high = Math.max(...this.state.hurdles);
    if (high > this.state.jumpHeight) {
      return "false";
    } else {
      return "true";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        hurdles: {this.state.hurdles}
        <input onChange={this.changeB} />
        jumpHeight: {this.state.jumpHeight}
        <br />
        {this.hurdleJump()}
      </div>
    );
  }
}

export default HurdleJump;
