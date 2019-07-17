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
      this.string.includes("anime") ||
      this.string.includes("meme") ||
      this.string.includes("vine") ||
      this.string.includes("roasts") ||
      this.string.includes("Danny Devito")
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
