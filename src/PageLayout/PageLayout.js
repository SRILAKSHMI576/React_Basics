import React from "react";
import "./style.css";

function Page() {
  return (
    <div className="Header">
      <div className="header1">Geeks For Geeks</div>
      <div className="para">Computer Science and Engineering</div>
      <div className="footer">Footer</div>
      <div className="menu">
        <a href="#home">HOME</a>
        <a href="#news">NEWS</a>
        <a href="notifications">NOTIFICATIONS</a>
        <div className="menu-log">
          <a href="#login">LOGIN</a>
        </div>
      </div>
      <div className="body_sec">
        <section>
          <h3>content section</h3>
        </section>
      </div>
    </div>
  );
}

export default Page;
