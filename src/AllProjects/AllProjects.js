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
import StateExample1 from "../State Example/StateExample1";
import StateExample2 from "../StateHook/StateExample2";
import LessThanEqualToZero from "../JavaScript/ConditionsInJs/LessThanEqualToZero";
import MultipleOf100 from "../JavaScript/ConditionsInJs/MultipleOf100";
import CompareStringsBySumOfCharacters from "../JavaScript/ConditionsInJs/CompareStrings";
import EvenOdd from "../JavaScript/ConditionsInJs/EvenOdd";
import TruthyOrFalsy from "../JavaScript/ConditionsInJs/TruthyOrFalsy";
import HurdleJump from "../JavaScript/ConditionsInJs/HurdleJump";
import MonthName from "../JavaScript/ConditionsInJs/MonthName";
import StringFilter from "../JavaScript/ConditionsInJs/StringFilter";
import HotPics from "../JavaScript/ConditionsInJs/HotPics";
import EvenNumberGenerator from "../JavaScript/ConditionsInJs/EvenNumberGenerator";
import LittleDictonary from "../JavaScript/ConditionsInJs/LittleDictonary";
import FlipTheBoolean from "../JavaScript/ConditionsInJs/FlipTheBoolean";
import FourLetterStrings from "../JavaScript/ConditionsInJs/FourLetterStrings";
import HelloBye from "../JavaScript/ConditionsInJs/HelloBye";
import Factorial from "../JavaScript/ConditionsInJs/Factorial";
import Pallindrome from "../JavaScript/ConditionsInJs/pallindrome";
import AvgOfWholeNum from "../JavaScript/ConditionsInJs/AvgOfWholeNum";
import XsAndOs from "../JavaScript/ConditionsInJs/XsAndOs";
import Eqality from "../JavaScript/ConditionsInJs/Eqality";
import UdemyAssignment from "../udemyAssignment/udemyAssignment";
import Conditions from "../Conditions/Conditions";
import HackerNews from "../Hacker News/HackerNews";
import Practice from "../Practice/Practice";

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
          <Route path="/state-exmpale1" component={StateExample1} />
          <Route
            path="/less-than-equal-to-zero"
            component={LessThanEqualToZero}
          />
          <Route path="/state-example2" component={StateExample2} />
          <Route path="/multiple-of-100" component={MultipleOf100} />
          <Route
            path="/compare-strings"
            component={CompareStringsBySumOfCharacters}
          />
          <Route path="/even-odd" component={EvenOdd} />
          <Route path="/truthy-falsy" component={TruthyOrFalsy} />
          <Route path="/hurdle-jump" component={HurdleJump} />
          <Route path="/month-name" component={MonthName} />
          <Route path="/string-filter" component={StringFilter} />
          <Route path="/hot-pics" component={HotPics} />
          <Route path="/even-num" component={EvenNumberGenerator} />
          <Route path="/little-dictionary" component={LittleDictonary} />
          <Route path="/boolean" component={FlipTheBoolean} />
          <Route path="/four-letter-string" component={FourLetterStrings} />
          <Route path="/hello-bye" component={HelloBye} />
          <Route path="/factorial" component={Factorial} />
          <Route path="/pallindrome" component={Pallindrome} />
          <Route path="/avg" component={AvgOfWholeNum} />
          <Route path="/xs-os" component={XsAndOs} />
          <Route path="/equal" component={Eqality} />
          <Route path="/udemy-assignment" component={UdemyAssignment} />
          <Route path="/conditions" component={Conditions} />
          <Route path="/hacker-news" component={HackerNews} />
          <Route path="/practice" component={Practice} />
        </div>
      </Router>
    </div>
  );
}
export default AllProjects;
