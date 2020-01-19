import React from "react";
import { TodoItem } from "./TodoItem";

interface ListItemsProps {
  todos: Array<Todo>;
  handleChecked: handleChecked;
}

export const ListItems: React.FC<ListItemsProps> = ({
  todos,
  handleChecked
}) => {
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem todo={todo} handleChecked={handleChecked} key={todo.id} />
        );
      })}
    </div>
  );
};
