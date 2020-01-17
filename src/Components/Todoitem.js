import React from "react";

const todoitem = props => {
  return (
    <div className="Todoitem">
      <div>
        <input
          type="checkbox"
          onChange={() => props.handleChecked(props.index)}
          checked={props.todo.done}
        ></input>
        <span
          style={{
            textDecoration: props.todo.done ? "line-through" : "none"
          }}
        >
          {props.todo.value}
        </span>

        <button onClick={() => props.deleteItem(props.index)}>X</button>
      </div>
    </div>
  );
};

export default todoitem;
