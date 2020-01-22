import React from "react";
import { TodoItem } from "./TodoItem";

interface ListItemsProps {
  todos: Array<Todo>;
  handleChecked: handleChecked;
  deleteItem: deleteItem;
}

export const ListItems: React.FC<ListItemsProps> = ({
  todos,
  handleChecked,
  deleteItem
}) => {
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            handleChecked={handleChecked}
            key={todo.id}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};
