import React from "react";
import "./style.css";

function Advertisement1(props) {
  return (
    <div className="advertisement1">
      <div className="paragraph">
        <p className="paragraph1">{props.title}</p>
      </div>
      <div className="pictures1">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture1"
              src="https://www.apkaabazar.com/wp-content/uploads/2019/04/amazon-pay.jpg"
              alt="image2"
            />
            <p className="recharge">{props.para2}</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture2"
              src="
              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiahYUVBd9--L5i0NX63zyB1O7Soythqlkl2tILLqQIp7x09Ct"
            />
            <p className="bills">{props.para3}</p>
          </a>
        </div>
      </div>
      <div className="pictures2">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture3"
              src="
              https://moneydotcomvip.files.wordpress.com/2019/02/cheapest-place-to-buy-online-groceries.jpg?quality=85"
            />
            <p className="Food">{props.para4}</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture4"
              src="
              https://comps.canstockphoto.com/lbel-limited-special-offer-with-ribbons-eps-vector_csp15254849.jpg"
            />
            <p className="offers">{props.para5}</p>
          </a>
        </div>
      </div>
      <p className="explore">{props.para}</p>
      <div>
        <a className="see" href={props.link}>
          {props.para1}
        </a>
      </div>
    </div>
  );
}
export default Advertisement1;
