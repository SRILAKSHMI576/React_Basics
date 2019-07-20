import React from "react";

function UserInput(props) {
  return (
    <div>
      <input type="text" value={props.personName} onChange={props.changeA} />
    </div>
  );
}
export default UserInput;
