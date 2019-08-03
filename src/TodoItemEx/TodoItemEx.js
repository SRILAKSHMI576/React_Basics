import React from "react";
import TodoItem1 from "./TodoItemEx1";
import todosData from "./todosData";

function TodoItem() {
  const todoItems = todosData.map(item => (
    <TodoItem1 key={item.id} item={item} />
  ));
  return <div>{todoItems}</div>;
}

export default TodoItem;
