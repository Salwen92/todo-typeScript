import React from "react";

const inputItems = props => {
  return (
    <div>
      <form onSubmit={evt => props.handleSubmit(evt)}>
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={evt => props.handleChange(evt)}
          value={props.inputValue}
        />
      </form>
    </div>
  );
};

export default inputItems;
