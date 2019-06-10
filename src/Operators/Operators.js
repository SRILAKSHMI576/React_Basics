import React from "react";
import "./style.css";

function Operators() {
  return (
    <div className="Cal">
      <table className="table" />
      <table>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="op">/</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="op">*</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="op">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="op">+</td>
        </tr>
        <tr>
          <td>0</td>
          <td> </td>
          <td>,</td>
          <td className="op">=</td>
        </tr>
      </table>
    </div>
  );
}

export default Operators;
