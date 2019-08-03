import React from "react";

function TodoItem1(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.completed} />
      <h3>{props.item.text}</h3>
    </div>
  );
}

export default TodoItem1;
