import React from "react";

class HelloWorld extends React.Component {
  state = {
    showResult: false
  };
  setShowResult = e => {
    this.setState(prevState => {
      return { showResult: !prevState.showResult };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.setShowResult}>Button</button>
        {this.state.showResult ? (
          <div>
            <h1>HELLO WORLD</h1>
          </div>
        ) : (
          <div>Srinivas</div>
        )}
      </div>
    );
  }
}
export default HelloWorld;
