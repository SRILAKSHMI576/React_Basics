import React from "react";

function UserOutput(props) {
  return (
    <div>
      <p>
        {props.personName} This paragraph contains a lot of lines in the source
        code.
      </p>

      <p>
        {props.userName}This paragraph contains a lot of spaces in the source
        code.
      </p>
    </div>
  );
}

export default UserOutput;
