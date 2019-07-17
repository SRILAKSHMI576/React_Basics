import React from "react";
import { reverse } from "dns";

class Pallindrome extends React.Component {
  state = {
    num: 123321
  };
  chnageNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  pallindromeNumber = () => {
    var reversed = parseInt(
      this.num
        .toString()
        .split("")
        .reverse()
        .join("")
    );
    if (this.num == reversed) {
      return "true";
    } else {
      return "false";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.chnageNum} />
        {this.state.num}
        <br />
        {this.pallindromeNumber()}
      </div>
    );
  }
}

export default Pallindrome;
