import React, { Component } from "react";

class FetchData extends Component {
  constructor() {
    super();
    this.state = {
      items: {}
    };
  }
  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data
        });
      });
  }
  render() {
    return <div>{this.state.items.vehicles}</div>;
  }
}

export default FetchData;
