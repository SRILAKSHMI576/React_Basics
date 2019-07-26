import React from "react";

class Conditions extends React.Component {
  state = {
    person: [
      { name: "Sri", age: 20 },
      { name: "hari", age: 21 },
      { name: "srinu", age: 23 }
    ]
  };

  render() {
    return (
      <div>
        <button>click me</button>

        <div>
          name: {this.state.person[0].name} , Age: {this.state.person[0].age}
          <br />
          name: {this.state.person[1].name} , Age: {this.state.person[1].age}
          <br />
          name: {this.state.person[2].name} , Age: {this.state.person[2].age}
        </div>
      </div>
    );
  }
}
export default Conditions;
