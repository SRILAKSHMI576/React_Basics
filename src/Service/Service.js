import React from "react";

function Service(props) {
  console.log(props);
  return (
    <div className="name1">
      <h5 className="item1">{props.title}</h5>
      <img
        id="picture"
        src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <p className="paragraph">
        {props.description}
        <button className="lu">READ MORE</button>
      </p>
    </div>
  );
}

export default Service;
