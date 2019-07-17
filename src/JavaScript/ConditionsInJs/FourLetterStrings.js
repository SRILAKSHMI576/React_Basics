import React from "react";

class FourLetterStrings extends React.Component {
  state = {
    str: ["Ryan ", "Kieran ", "Jason ", "Matt"]
  };
  changeString = e => {
    this.setState({
      str: e.target.value
    });
  };
  fourLetterString = () => {
    return this.str.filter(word => word.length == 4);
  };
  render() {
    return (
      <div>
        <input onChange={this.changeString} />
        {this.state.str} <br />
        {this.fourLetterString()}
      </div>
    );
  }
}
export default FourLetterStrings;
