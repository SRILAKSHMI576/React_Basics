import React from "react";

class StateExample1 extends React.Component {
  state = {
    person: [
      { name: "sri", age: 21 },
      { name: "laxmi", age: 23 },
      { name: "srinu", age: 23 }
    ]
  };

  swtichName = () => {
    // console.log("change name");
    this.setState({
      person: [
        { name: "sri", age: 21 },
        { name: "laxmi", age: 23 },
        { name: "srinivas", age: 25 }
      ]
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.swtichName}>switch Name</button>
        Name={this.state.person[0].name} Age={this.state.person[0].age} <br />
        Name={this.state.person[1].name} Age={this.state.person[1].age}
        <br />
        Name={this.state.person[2].name} Age={this.state.person[2].age}
      </div>
    );
  }
}

export default StateExample1;
