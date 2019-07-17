import React from "react";

class LittleDictonary extends React.Component {
  state = {
    initial: "bu",
    words: ["button ", "breakfast ", "border"]
  };
  changeIntital = e => {
    this.setState({
      initial: e.target.value
    });
  };
  changeWords = e => {
    this.setState({
      words: e.target.value
    });
  };
  littleDictionary = () => {
    return this.words.filter(x => x.startsWith(this.initial));
  };

  render() {
    return (
      <div>
        <input onChange={this.changeIntital} />
        {this.state.initial} <br />
        <input onChange={this.changeWords} />
        {this.state.words}
        <br />
        {this.littleDictionary()}
      </div>
    );
  }
}

export default LittleDictonary;
