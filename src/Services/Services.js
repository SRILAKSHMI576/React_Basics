import React from "react";
import "./styles.css";
import Service from "../Service/Service";

function Services() {
  return (
    <div className="services">
      <Service title="AUTOMOTIVE" description="Computer" />
      <Service title="COMMERICAL" description="Mechanical" />
      <Service title="INDUSTRIAL" description="Electornics" />
      <Service title="DIESEL EXHASTIVE FIELD" description="chemical" />
    </div>
  );
}

export default Services;
