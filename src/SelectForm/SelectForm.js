import React, { Component } from "react";

class SelectForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }
  changeHandle(event) {
    this.setState({
      name: event.target.value
    });
  }
  changeSubmit(event) {
    alert("Your favourite flavour is: " + this.state.name);
  }
  render() {
    return (
      <form onSubmit={this.changeSubmit}>
        Pick your favorite flavor:
        <select value={this.state.name} onChange={this.changeHandle}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
        <br />
        <br />
        <input type="file" />
        <input type="number" />
      </form>
    );
  }
}

export default SelectForm;
