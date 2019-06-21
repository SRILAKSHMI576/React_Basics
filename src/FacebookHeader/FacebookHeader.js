import React from "react";
import "./style.css";

function FacebookHeader() {
  return (
    <div className="facebook-header">
      <div>
        <p className="title">Facebook</p>
      </div>
      <div className="details">
        <form>
          Email or Phone <br />
          <input className="input" type="text" name="Email" />
        </form>
        <form className="details-2">
          Password <br />
          <input className="input" type="password" name="password" />
        </form>
        <div>
          <button className="button">Log In</button>
        </div>
      </div>
      <a className="link" href="https://www.facebook.com/">
        Forgotten account?
      </a>
    </div>
  );
}

export default FacebookHeader;
