import React from "react";
import "./styles.css";

import Services from "../Services/Services";
import BodySection from "../BodySection/BodySection";
import Headermenu from "../Headermenu/Headermenu";

function Lubricants() {
  return (
    <div className="lubricants">
      <b className="lubri">LUBRICANTS</b>
      <b className="call">CALL TOLL FREE 1-800-772-5823</b>
      <Headermenu />
      <BodySection />
      <Services />
    </div>
  );
}

export default Lubricants;
