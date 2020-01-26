import React from "react";
import styled from "@emotion/styled";
import { Layer } from "sancho";

const TodoInput = styled("input")`
  width: 80%;
  font-size: 14px;
  margin: 0 0.5rem;

  padding: 0.75em 1.5rem;
  background: none;
  border: white 1px solid;
  transition: border 250ms ease-out;
  &:focus {
    border: white 1px solid;
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
      <Layer
        style={{
          overflow: "auto",
          maxWidth: "100%",
          width: "100%",
          textAlign: "left",
          borderRadius: "0"
        }}
      >
        <TodoInput
          type="text"
          placeholder="What needs to be Done?"
          onChange={evt => handelChange(evt)}
          value={todo}
        />
      </Layer>
    </form>
  );
};
