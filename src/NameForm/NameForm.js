import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.changeName = this.changeName.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }
  changeName(event) {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  }
  changeSubmit(event) {
    alert("A name was submmited " + this.state.name);
  }
  render() {
    return (
      <form onSubmit={this.changeSubmit}>
        Name:
        <input type="text" value={this.state.name} onChange={this.changeName} />
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}
export default NameForm;
