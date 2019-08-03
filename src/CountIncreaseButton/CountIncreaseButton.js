import React from "react";

class CountIncreaseButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.isIncrement = this.isIncrement.bind(this);
  }
  isIncrement() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.isIncrement}>button</button>
        <br />
        {this.state.count}
      </div>
    );
  }
}

export default CountIncreaseButton;
