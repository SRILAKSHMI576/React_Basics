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
      .then(data => console.log(data));
  }
  render() {
    return <div>hello</div>;
  }
}

export default FetchData;
