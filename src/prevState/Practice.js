import React from "react";

class Practice extends React.Component {
  state = {
    a: 5,
    b: 4,
    showResult: false
  };
  changeA = e => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false
    });
  };
  changeB = e => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false
    });
  };
  setShowResult = e => {
    this.setState(prevState => {
      return { showResult: !prevState.showResult };
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        <input onChange={this.changeB} />
        <button onClick={this.setShowResult}>Button</button>
        <br />
        {this.state.showResult ? (
          <div>
            <br />
            a: {this.state.a} b: {this.state.b} <br />
            {"Add: " + (this.state.a + this.state.b)} <br />
            {"mul: " + this.state.a * this.state.b}
            {"div: " + this.state.a / this.state.b}
          </div>
        ) : (
          <div>show result </div>
        )}
      </div>
    );
  }
}

export default Practice;
