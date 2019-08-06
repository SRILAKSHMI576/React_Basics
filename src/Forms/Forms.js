import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstname: " ",
      lastname: " ",
      isFriendly: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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
        <br />
        <textarea value={"some default value"} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          is Friendly?
        </label>
        <h1>
          {this.state.firstname}
          {this.state.lastname}
        </h1>
      </form>
    );
  }
}

export default Forms;
