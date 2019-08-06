import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstname: " ",
      lastname: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="first Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="last Name"
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstname}
          {this.state.lastname}
        </h1>
      </form>
    );
  }
}

export default Forms;
