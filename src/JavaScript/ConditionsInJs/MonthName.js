import React from "react";

class MonthName extends React.Component {
  state = {
    num: 9
  };
  changeNum = e => {
    this.setState({
      num: e.target.value
    });
  };
  monthName = () => {
    const mapping = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
    return mapping[this.state.num];
  };
  render() {
    return (
      <div>
        <input onChange={this.changeNum} />
        {this.state.num} month is ---
        {this.monthName()}
      </div>
    );
  }
}

export default MonthName;
