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
import Sum_of_natural_numbers from "../StateEample/Sum_of_numbers";
import DollartoRuppe from "../StateEample/DollartoRuppe";
import Sum_of_Squares from "../StateEample/Sum_of_Squares";
import Rectangle from "../StateEample/Rectangle";
import StateSquare from "../StateEample/StateSquare";
import Circle from "../StateEample/Circle";
import Farenheit from "../StateEample/Farenheit";
import ButtonCount from "../StateEample/ButtonCount";
// import GeekCalculator from "../GeekCalculator/GeekCalculator";
import LogoutLogin from "../LogoutLogin/LogoutLogin";
import EvenOrOdd from "../EvenOrOdd/EvenOrOdd";
import StateExample1 from "../State Example/StateExample1";
import LessThanEqualToZero from "../JavaScript/NumLessThanEqualToZero";
import StateExample2 from "../StateExample2/StateExample2";

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
          <Route path="/cube" component={Cube} />
          <Route path="/sum-of-numbers" component={Sum_of_natural_numbers} />
          <Route path="/dollar-to-rupee" component={DollartoRuppe} />
          <Route path="/sum-of-squares" component={Sum_of_Squares} />
          <Route path="/rectangle" component={Rectangle} />
          <Route path="/state-square" component={StateSquare} />
          <Route path="/circle" component={Circle} />
          <Route path="/farenheit" component={Farenheit} />
          <Route path="/button-count" component={ButtonCount} />
          {/* <Route path="/geek-calculator" component={GeekCalculator} /> */}
          <Route path="/logout-login" component={LogoutLogin} />
          <Route path="/even-odd" component={EvenOrOdd} />
          <Route path="/state-exmpale1" component={StateExample1} />
          <Route
            path="/less-than-equal-to-zero"
            component={LessThanEqualToZero}
          />
          <Route path="/state-example2" component={StateExample2} />
        </div>
      </Router>
    </div>
  );
}
export default AllProjects;
