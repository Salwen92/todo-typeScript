import React from "react";
import "../todoItem.css";

interface TodoItemProps {
  todo: Todo;
  handleChecked: handleChecked;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, handleChecked }) => {
  return (
    <div>
      <label className={todo.done ? "done" : undefined}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => handleChecked(todo)}
        />
        {todo.value}
      </label>
    </div>
  );
};
