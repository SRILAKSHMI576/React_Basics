import React from "react";

class AboutState extends React.Component {
  state = {
    a: 10,
    b: 5
  };
  setA = e => {
    this.setState({
      a: parseInt(e.target.value)
    });
  };
  setB = e => {
    this.setState({
      b: parseInt(e.target.value)
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.setA} />
        <input onChange={this.setB} />
        <button className="Result">Result</button>
        <br />
        {"A:" + this.state.a + " B:" + this.state.b}
        <br />
        {"Sub: " + (this.state.a - this.state.b)}
        <br />
        {"Mul: " + this.state.a * this.state.b}
        <br />
        {"Div: " + this.state.a / this.state.b}
      </div>
    );
  }
}
export default AboutState;
