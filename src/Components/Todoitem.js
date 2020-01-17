import React from "react";

const todoitem = props => {
  return (
    <div className="Todoitem">
      <div>
        <input
          type="checkbox"
          onChange={() => props.handleChecked(props.index)}
          checked={props.todo.done}
          id={props.todo.id}
        ></input>
        <span
          style={{
            textDecoration: props.todo.done ? "line-through" : "none"
          }}
        >
          {props.todo.value}
        </span>

        <button id={props.todo.id} onClick={() => props.deleteItem(props.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default todoitem;
