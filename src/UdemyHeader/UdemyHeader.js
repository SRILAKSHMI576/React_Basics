import React from "react";
import "./style.css";

function UdemyHeader() {
  return (
    <div className="udemy-header">
      <div>
        <img
          className="udemy-image"
          src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
          alt="Udemy"
          width="110"
          height="32"
          data-purpose="udemy-brand-logo"
        />
        <span>Categories</span>
        <form>
          <input
            classname="text"
            type="text"
            placeholder="Search for anything"
            name="search"
          />
          <button className="button1" type="sumit">
            <img
              className="icon"
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
            />
          </button>
        </form>
        <div className="teach">Teach on Udemy</div>
      </div>
    </div>
  );
}
export default UdemyHeader;