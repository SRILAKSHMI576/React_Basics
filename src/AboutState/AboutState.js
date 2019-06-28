import React from "react";

class AboutState extends React.Component {
  state = {
    a: 10,
    b: 5
  };
  render() {
    return <div>{"A:" + this.state.a + " B:" + this.state.b}</div>;
  }
}
export default AboutState;
