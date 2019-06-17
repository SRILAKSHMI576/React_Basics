import React from "react";
import "./style.css";

function Advertisement1() {
  return (
    <div className="advertisement1">
      <div className="paragraph">
        <p className="paragraph1">Recharges, bills & food</p>
      </div>
      <div className="pictures1">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture1"
              src="https://www.apkaabazar.com/wp-content/uploads/2019/04/amazon-pay.jpg"
            />
            <p className="recharge">Mobile recharge</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture2"
              src="
              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiahYUVBd9--L5i0NX63zyB1O7Soythqlkl2tILLqQIp7x09Ct"
            />
            <p className="bills">Bills</p>
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
            <p className="Food">Food</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="picture4"
              src="
              https://comps.canstockphoto.com/lbel-limited-special-offer-with-ribbons-eps-vector_csp15254849.jpg"
            />
            <p className="offers">Offers</p>
          </a>
        </div>
      </div>
      <p className="explore">Explore cashback offers</p>
      <div>
        <a className="see" href="https://www.amazon.in/">
          see more
        </a>
      </div>
    </div>
  );
}
export default Advertisement1;
