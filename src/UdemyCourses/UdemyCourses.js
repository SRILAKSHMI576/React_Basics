import React from "react";
import "./style.css";

function UdemyCourses() {
  return (
    <div>
      <p className="what">What to learn next</p>
      <p className="view">
        Because you viewed{" "}
        <a className="deep" href="www.udemy.com">
          "Deep Learning A-Z™: Hands-On Artificial Neural Networks"
        </a>
      </p>
      <div>
        <div className="deep-python">
          <img
            className="deep-py"
            src="https://i.udemycdn.com/course/750x422/980086_196d_2.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default UdemyCourses;
