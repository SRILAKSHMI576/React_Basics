import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import "./style.css";
import Advertisement1 from "../Advertisement1/Advertisement1";
import Advertisement2 from "../Advertisement2/Advertisement2";

function Premium() {
  return (
    <div className="premium">
      <Advertisement />
      <Advertisement1 />
      <Advertisement2 />
    </div>
  );
}
export default Premium;
