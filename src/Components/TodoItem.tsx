import React from "react";
import "../todoItem.css";
import styled from "@emotion/styled";

import { IconButton, IconTrash2, Layer, List, ListItem } from "sancho";

interface TodoItemProps {
  todo: Todo;
  handleChecked: handleChecked;
  deleteItem: deleteItem;
}

const CheckBoxTodo = styled("input")`
  height: 25px;
  width: 25px;
  
  cursor: pointer;

  }
`;

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleChecked,
  deleteItem
}) => {
  return (
    <div>
      <Layer style={{ overflow: "hidden", maxWidth: "100%", width: "100%" }}>
        <List>
          <label className={todo.done ? "done" : undefined}>
            <ListItem
              wrap={true}
              contentBefore={
                <CheckBoxTodo
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleChecked(todo)}
                />
              }
              primary={todo.value}
              contentAfter={
                <IconButton
                  icon={<IconTrash2 />}
                  label="Menu"
                  variant="ghost"
                  onClick={() => deleteItem(todo.id)}
                />
              }
            />
          </label>
        </List>
      </Layer>
    </div>
  );
};
