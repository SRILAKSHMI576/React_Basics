import React from "react";
import "./style.css";

function Advertisement3(props) {
  return (
    <div className="advertisement3">
      <p className="paragraph1">{props.title}</p>
      <div className="photos1">
        <div>
          <a href="https://www.amazon.in/">
            <img className="caps" src={props.link} alt="image1" />
          </a>
        </div>
      </div>
      <p className="machine">{props.para}</p>

      <a className="see-more" href="https://www.amazon.in/">
        {props.para2}
      </a>
    </div>
  );
}
export default Advertisement3;
