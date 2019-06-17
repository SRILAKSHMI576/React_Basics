import React from "react";
import "./style.css";

function Advertisement() {
  return (
    <div className="advertisement">
      <div className="para">
        <p className="para1">Hi, srinivasarao</p>
        <p className="para2"> Custmoers since 2016</p>
      </div>
      <div className="para3">Top links for you</div>
      <div className="images1">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="image2"
              src="
              https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/amazon-prime-aacs.png?itok=UGbCIhIQ"
            />
            <p className="orders">Your Orders</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="image3"
              src="
              https://images-na.ssl-images-amazon.com/images/I/510d4L0LYKL._SY550_.jpg"
            />
            <p className="mobile">
              Mobile and <br /> Accessories
            </p>
          </a>
        </div>
      </div>
      <div className="images2">
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="image1"
              src="
              https://images-na.ssl-images-amazon.com/images/I/81Jne9w3OML._UX466_.jpg"
            />
            <p className="Fashion">Fashion</p>
          </a>
        </div>
        <div>
          <a href="https://www.amazon.in/">
            <img
              className="image4"
              src="
              https://images-na.ssl-images-amazon.com/images/I/811SAfnegNL._SY606_.jpg"
            />
            <p className="para4">Grocery</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Advertisement;
