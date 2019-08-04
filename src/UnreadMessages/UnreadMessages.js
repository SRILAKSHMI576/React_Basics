import React from "react";

class UnreadMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ]
    };
  }
  render() {
    return (
      <div>
        {/* <h1>You have {this.state.messages.length} unread messages</h1> */}
        {this.state.messages.length > 0 && (
          <h1>You have {this.state.messages.length} unread messages</h1>
        )}
      </div>
    );
  }
}

export default UnreadMessages;
