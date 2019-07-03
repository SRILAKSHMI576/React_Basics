import React from "react";
import "./style.css";

function UdemyCourses(props) {
  return (
    <div>
      <p className="what">{props.title}</p>
      <p className="view">
        {props.text1}
        <a className="deep" href="www.udemy.com">
          {props.link}
        </a>
      </p>
      <div className="udemy-course">
        <div className="deep-python">
          <img className="deep-py" src={props.image} />
          <p className="deep-learn">{props.text2}</p>
          <p className="lazy">{props.text3}</p>
          <p className="views">{props.views}</p>
          <p className="fee">{props.fee}</p>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img className="deep-py" src={props.link1} />
            <p className="deep-learn">{props.text4}</p>
            <p className="lazy">{props.text5}</p>
            <p className="views">{props.views1}</p>
            <p className="fee">
              <del>12,800</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img className="deep-py" src={props.link2} />
            <p className="deep-learn">{props.text6}</p>
            <p className="lazy">{props.text7}</p>
            <p className="views">{props.views}</p>
            <p className="fee">
              <del>11,520</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img className="deep-py" src={props.link3} />
            <p className="deep-learn">{props.text8}</p>
            <p className="lazy">{props.text9}</p>
            <p className="views">{props.views3}</p>
            <p className="fee">
              <del>12,800</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img className="deep-py" src={props.link4} />
            <p className="deep-learn">{props.text10}</p>
            <p className="lazy">{props.text11}</p>
            <p className="views">{props.views4}</p>
            <p className="fee">
              <del>11,520</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UdemyCourses;
