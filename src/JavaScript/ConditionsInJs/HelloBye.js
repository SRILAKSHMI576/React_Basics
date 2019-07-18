import React from "react";

class HelloBye extends React.Component {
  state = {
    name: "sri laxmi",
    num: 1
  };
  changeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  changeNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  sayHelloSayBye = () => {
    var upperCase =
      this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1);
    if (this.state.num == 1) {
      return "Hello " + upperCase;
    } else {
      return "Bye " + upperCase;
    }
  };
  render() {
    return (
      <div>
        <input onChange={this.changeName} />
        {this.state.name} <br />
        <input onChange={this.changeNum} />
        {this.state.num}
        <br />
        {this.sayHelloSayBye()}
      </div>
    );
  }
}

export default HelloBye;
