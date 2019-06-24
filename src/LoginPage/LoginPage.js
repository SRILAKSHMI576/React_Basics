import React from "react";
import "./style.css";

function LoginPage() {
  return (
    <div className="Main-Page">
      <div className="head">
        Facebook helps you connect and share with the people in your life.
        <img className="img" src="http://www.mrsdingman.com/facebook_map.gif" />
      </div>

      <div className="login">
        <h1>Create an account</h1>
        <p className="line">It's free and always will be.</p>

        <form>
          <label>
            <input
              className="first"
              type="text"
              name="name"
              placeholder="First name"
            />
          </label>
          <label className="last-name">
            <input
              className="first"
              type="text"
              name="name"
              placeholder="Last name"
            />
          </label>
        </form>
        <label>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Mobile number or email address"
          />
        </label>
        <label>
          <input
            className="email"
            type="password"
            name="name"
            placeholder="New password"
          />
        </label>
        <p className="birthday">Birthday</p>
        <div className="calendar">
          <select className="date" title="Day">
            <option value="0">Day</option>
            <option value="1">1</option>
            <option value="2" selected="1">
              2
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select className="month">
            <option value="0">Mon</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9" selected="1">
              Sep
            </option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <select className="Year">
            <option value="0">Year</option>
            <option value="1">1999</option>
            <option value="2">1998</option>
            <option value="3" selected="1">
              1997
            </option>
            <option value="4">1996</option>
            <option value="5">1995</option>
            <option value="6">1994</option>
            <option value="7">1993</option>
            <option value="8">1992</option>
            <option value="9">1991</option>
            <option value="10">1990</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
