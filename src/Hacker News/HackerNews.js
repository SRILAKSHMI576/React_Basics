import React from "react";
import HackerHeader from "../Hacker Header/HackerHeader";
import HackerBody from "../Hacker Body/HackerBody";
import axios from "axios";

class HackerNews extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => response.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <HackerHeader />
        <HackerBody />
      </div>
    );
  }
}

export default HackerNews;
