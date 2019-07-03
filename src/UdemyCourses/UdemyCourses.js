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
          <p className="deep-learn">Deep Learning Prerequisites:The Num...</p>
          <p className="lazy">Lazy Programmer Inc.</p>
          <p className="views">4.5 (12,443)</p>
          <p className="fee">Free</p>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img
              className="deep-py"
              src="https://thebulletin.org/wp-content/uploads/2018/06/Landing-Page-AI-Twitter.jpg"
            />
            <p className="deep-learn">
              Artificial Intelligence A-Z<sup>TM</sup>Learn How To Build..
            </p>
            <p className="lazy">Hadelin de Ponteves, Kirill Erem...</p>
            <p className="views">4.4 (10,371)</p>
            <p className="fee">
              <del>12,800</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img
              className="deep-py"
              src="https://i.udemycdn.com/course/750x422/1080408_2645_3.jpg"
            />
            <p className="deep-learn">
              Artificial Intelligence: Reinforcement Learning..
            </p>
            <p className="lazy">Lazy Programmer Inc.</p>
            <p className="views">4.6 (4,468)</p>
            <p className="fee">
              <del>11,520</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img
              className="deep-py"
              src="https://i.udemycdn.com/course/750x422/918390_02a6.jpg"
            />
            <p className="deep-learn">
              Natural Language Processing with Deep..
            </p>
            <p className="lazy">Lazy Programmer Inc.</p>
            <p className="views">4.6 (3,349)</p>
            <p className="fee">
              <del>12,800</del>
              <ins>500</ins>
            </p>
          </div>
        </div>
        <div className="ai">
          <div className="deep-python">
            <img
              className="deep-py"
              src="https://i.udemycdn.com/course/750x422/772462_d385.jpg"
            />
            <p className="deep-learn">Modern Deep Learning in Python..</p>
            <p className="lazy">Lazy Programmer Inc.</p>
            <p className="views">4.6 (1, 707)</p>
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
