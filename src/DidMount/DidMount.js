import React, { Component } from "react";
import DidConditional from "./DidConditional";

class DidMount extends Component {
  constructor() {
    super();
    this.state = {
      isLoadding: true
    };
  }
  render() {
    return (
      <div>
        Hello
        <DidConditional />
      </div>
    );
  }
}

export default DidMount;
