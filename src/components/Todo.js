import React, { useState } from "react";

const Todo = (props) => {
  const [todo, setTodo] = useState(props.todo);

  return (
    <li
      className={`${todo.checked ? "checked" : ""}`}
      onClick={() => setTodo({ ...todo, checked: !todo.checked })}
    >
      {todo.task}
    </li>
  );
};

export default Todo;
