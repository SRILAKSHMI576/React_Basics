import React from "react";

function GeeksCalButtons() {
  return (
    <div>
      <div className="button-row">
        <button>Clear</button>
        <button>Delete</button>
        <button>.</button>
        <button>/</button>
      </div>
      <br />
      <div className="button-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <br />
      <div className="button-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <br />
      <div className="button-row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <br />
      <div className="button-row">
        <button>0</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default GeeksCalButtons;
