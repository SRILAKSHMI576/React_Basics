import React from "react";

class AboutState extends React.Component {
  state = {
    a: 10,
    b: 5
  };
  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.setState({
              a: parseInt(e.target.value)
            });
          }}
        />
        <input />
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
