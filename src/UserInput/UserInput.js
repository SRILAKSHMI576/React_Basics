import React from "react";

function UserInput(props) {
  return (
    <div>
      <input type="text" value={props.username} onChange={props.changeA} />
    </div>
  );
}
export default UserInput;
