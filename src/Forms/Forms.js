import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstname: " ",
      lastname: " ",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstname}
          name="firstname"
          placeholder="first Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastname}
          name="lastname"
          placeholder="last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea value={"some default value"} onChange={this.handleChange} />
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
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>Favourite Color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="orange">Orange</option>
        </select>
        <h1>
          {this.state.firstname}
          {this.state.lastname}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favourite color is{this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default Forms;
