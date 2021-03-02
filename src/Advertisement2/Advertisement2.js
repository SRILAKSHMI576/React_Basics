import React from "react";
import "./style.css";

function Advertisement2() {
  return (
    <div className="advertisement2">
      <p className="paragraph1">Recommended for you</p>
      <div className="photos1">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="photo1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVpN9bReEtj8ilIuE3awJC8TDgWkhAvGM08RGvNoraDNrrLKu"
              alt="image1"
            />
          </a>
        </div>
      </div>
      <p className="lucifer">Lucifer (Telugu)</p>

      <a className="see-more" href="https://www.amazon.in/">
        See more on Primevideo.com
      </a>
    </div>
  );
}
export default Advertisement2;
