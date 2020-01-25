import React from "react";
import styled from "@emotion/styled";

const TodoInput = styled("input")`
  width: 80%;
  font-size: 14px;
  margin: 0 0.5rem;
  border-radius: 2rem;
  padding: 0.75em 1.5rem;
  background: none;
  border: #e3e3e3 1px solid;
  transition: border 250ms ease-out;
  &:focus {
    border: #4fc08d 1px solid;
    outline: none;
  }
`;
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
      <TodoInput
        type="text"
        placeholder="What needs to be Done?"
        onChange={evt => handelChange(evt)}
        value={todo}
      />
    </form>
  );
};
