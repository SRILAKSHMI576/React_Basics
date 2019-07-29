import React from "react";
import "./style.css";

function HackerHeader() {
  return (
    <div className="hacker">
      <div className="hacker-header">
        <a href="#" className="y">
          Y
        </a>
        <a href="#" className="hacker-1">
          Hacker News
        </a>
        <a href="#">new</a> |<a href="#">past</a> |<a href="#">comments</a> |
        <a href="#">ask</a> |<a href="#">show</a> |<a href="#">jobs</a> |
        <a href="#">submit</a>
        <div className="log-in">
          <a href="#">login</a>
        </div>
      </div>
    </div>
  );
}

export default HackerHeader;
