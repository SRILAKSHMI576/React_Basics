import React from "react";
import HackerHeader from "../Hacker Header/HackerHeader";
import HackerBody from "../Hacker Body/HackerBody";
import axios from "axios";

class HackerNews extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => {
        this.setState({ posts: response.data });
      });
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
