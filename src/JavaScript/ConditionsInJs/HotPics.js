import React from "react";

class HotPics extends React.Component {
  state = {
    string: "Hot pictures of Danny Devito"
  };
  changeString = e => {
    this.setState({
      string: e.target.value
    });
  };

  hotPicsOfDenito = () => {
    if (
      this.state.string.includes("anime") ||
      this.state.string.includes("meme") ||
      this.state.string.includes("vine") ||
      this.state.string.includes("roasts") ||
      this.state.string.includes("Danny Devito")
    ) {
      return "NO!";
    } else {
      return "Safe watching!";
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeString} />
        {this.state.string}
        <br />
        {this.hotPicsOfDenito()}
      </div>
    );
  }
}

export default HotPics;
