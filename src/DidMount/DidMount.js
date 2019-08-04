import React, { Component } from "react";
import DidConditional from "./DidConditional";

class DidMount extends Component {
  constructor() {
    super();
    this.state = {
      isLoadding: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoadding: false
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        {this.state.isLoadding ? <h1>Loading....</h1> : <DidConditional />}
      </div>
    );
  }
}

export default DidMount;
