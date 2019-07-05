import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import Facebook from "../Facebook/Facebook";
import Amazon from "../Amazon/Amazon";
import Lubricants from "../Lubricants/Lubricants";
import Library from "../Library/Library";
import Index1 from "../GridExmaple2/index1";
import Index from "../GridExmpale1";
import GridLayout from "../GridLayoutExamples/GridLayout";
import Time from "../Time";
import JavaScript from "../JavaScript/JavaScript";
import JavascriptBasics from "../JavaScript/JavascriptBasics/JavascriptBasics";
import Checkout from "../Checkout/Checkout";
import Excerises from "../JavaScript/Excerises/Excerises";
import Operator from "../Operator/Operator";
import AboutState from "../AboutState/AboutState";
import UdemyHomePage from "../UdemyHomePage/UdemyHomePage";
import StateEx from "../StateEx/StateEx";
import Square from "../StateEample/Square";
import Cube from "../StateEample/Cube";

function AllProjects() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/calculator" component={Calculator} />
          <Route path="/facebook" component={Facebook} />
          <Route path="/amazon-premium" component={Amazon} />
          <Route path="/lubricants" component={Lubricants} />
          <Route path="/library" component={Library} />
          <Route path="/index-1" component={Index1} />
          <Route path="/index" component={Index} />
          <Route path="/grid-layout" component={GridLayout} />
          <Route path="/time" component={Time} />
          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/js" component={JavaScript} /> */}
          <Route path="/js/basics" component={JavascriptBasics} />
          <Route path="/excerises" component={Excerises} />
          <Route path="/operator" component={Operator} />
          <Route path="/about-state" component={AboutState} />
          <Route path="/udemy" component={UdemyHomePage} />
          <Route path="/state-ex" component={StateEx} />
          <Route path="/square" component={Square} />
          <Route oath="cube" component={Cube} />
        </div>
      </Router>
    </div>
  );
}
export default AllProjects;
