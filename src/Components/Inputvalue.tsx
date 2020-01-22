import React from "react";

interface AddTodoProps {
  todo: string;
  handelSubmit: handelSubmit;
  handelChange: handelChange;
}

export const InputValue: React.FC<AddTodoProps> = ({
  todo,
  handelSubmit,
  handelChange
}) => {
  return (
    <form onSubmit={evt => handelSubmit(evt)}>
      <input
        type="text"
        placeholder="What needs to be Done?"
        onChange={evt => handelChange(evt)}
        value={todo}
      />
    </form>
  );
};
