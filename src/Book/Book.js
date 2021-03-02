import React from "react";
import "./style.css";

function Book() {
  return (
    <div className="book">
      <div className="details">
        Name: Robin sharma <br />
        Author: Robin
      </div>
      <br />
      <img
        className="image"
        src="https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg"
        alt="book"
      />
    </div>
  );
}

export default Book;
