import React from "react";
import "./style.css";

class ButtonCount extends React.Component {
  state = {
    a: 0
  };
  increaseValue = e => {
    this.setState({
      a: this.state.a + 1
    });
  };
  render() {
    return (
      <div>
        <button className="click" onClick={this.increaseValue}>
          Click on
        </button>
        <br />a = {this.state.a}
      </div>
    );
  }
}

export default ButtonCount;
