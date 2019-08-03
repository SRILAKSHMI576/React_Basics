import React from "react";

class StateExample3 extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true //false
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "In";
    } else {
      wordDisplay = "Out";
    }
    return (
      <div>
        <h1>You are currently {wordDisplay}</h1>
      </div>
    );
  }
}

export default StateExample3;
