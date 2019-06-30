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
        <div className="categories">Categories</div>
        <form>
          <input
            className="text"
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
        <div className="courses">My Courses</div>
        <img
          className="heart"
          src="http://www.clker.com/cliparts/Q/P/D/n/2/c/red-heart-outline-md.png"
        />
      </div>
    </div>
  );
}
export default UdemyHeader;
