import React from "react";

class Factorial extends React.Component {
  state = {
    num: 9
  };
  chnageNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.chnageNum} />
        {this.state.num}
      </div>
    );
  }
}

export default Factorial;
