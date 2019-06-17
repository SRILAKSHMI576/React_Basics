import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import "./style.css";
import Advertisement1 from "../Advertisement1/Advertisement1";
import Advertisement2 from "../Advertisement2/Advertisement2";
import Advertisement3 from "../Advertisement3/Advertisement3";

function Premium() {
  return (
    <div>
      <div className="premium">
        <Advertisement />
        <Advertisement1
          title="Recharges, bills & food"
          para="Explore cashback offers"
          para1="see more"
          link="https://www.amazon.in/"
          para2="Mobile recharge"
          para3="Bills"
          para4="Food"
          para5="Offers"
        />
        <Advertisement2 />
      </div>
      <div className="premium1">
        <Advertisement1
          title="Under ₹400 | Free delivery"
          para="Best bargain finds"
          para1="Explore all"
          link="https://4.imimg.com/data4/JM/CE/MY-4650050/boys-blazer-250x250.jpg"
          para2="Men's Fashion"
          para3="Women's Fashion"
          para4="Electronics"
          para5="Home decor"
        />
        <Advertisement3
          title="Washing machines"
          para="Up to 25% off: Washing machines | No cost EMI offers"
          para2="Explore all washing machines"
        />
        <Advertisement3
          title="Smart gadgets by Amazon"
          para="Make everyday easier with Echo, Kindle & Fire TV stick"
          para2="Shop now"
        />
      </div>
    </div>
  );
}
export default Premium;
