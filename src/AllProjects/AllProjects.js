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
          {/* <Route path="/js" component={JavaScript} /> */}
          <Route path="/js/basics" component={JavascriptBasics} />
        </div>
      </Router>
    </div>
  );
}
export default AllProjects;
