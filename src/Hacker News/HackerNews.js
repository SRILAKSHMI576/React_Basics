import React from "react";
import HackerHeader from "../Hacker Header/HackerHeader";
import HackerBody from "../Hacker Body/HackerBody";

class HackerNews extends React.Component {
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
