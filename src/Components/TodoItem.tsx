import React from "react";
import "../todoItem.css";

interface TodoItemProps {
  todo: Todo;
  handleChecked: handleChecked;
  deleteItem: deleteItem;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleChecked,
  deleteItem
}) => {
  return (
    <div>
      <label className={todo.done ? "done" : undefined}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => handleChecked(todo)}
        />
        <textarea>{todo.value}</textarea>
        <button onClick={() => deleteItem(todo.id)}>X</button>
      </label>
    </div>
  );
};
