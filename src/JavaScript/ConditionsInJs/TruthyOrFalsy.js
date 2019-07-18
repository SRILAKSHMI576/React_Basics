import React from "react";

class TruthyOrFalsy extends React.Component {
  state = {
    a: 9
  };
  changeA = e => {
    this.setState({
      a: e.target.value
    });
  };

  trutyOrFalsy = () => {
    if (this.state.a == Boolean) {
      return 1;
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeA} />
        {this.state.a} is
        {this.trutyOrFalsy()}
      </div>
    );
  }
}

export default TruthyOrFalsy;
