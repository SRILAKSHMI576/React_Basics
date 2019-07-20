import React from "react";

function UserOutput(props) {
  return (
    <div>
      <p>
        {props.username}This paragraph contains a lot of lines in the source
        code, but the browser ignores it.
      </p>

      <p>
        {props.userName}This paragraph contains a lot of spaces in the source
        code, but the browser ignores it.
      </p>
    </div>
  );
}

export default UserOutput;
