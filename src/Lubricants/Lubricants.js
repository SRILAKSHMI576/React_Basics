import React from "react";
import "./styles.css";

import Services from "../Services/Services";
import BodySection from "../BodySection/BodySection";
import Headermenu from "../Headermenu/Headermenu";
import Header from "../Header/Header";

function Lubricants() {
  return (
    <div className="project">
      <Header />
      <Headermenu />
      <BodySection />
      <Services />
    </div>
  );
}

export default Lubricants;
