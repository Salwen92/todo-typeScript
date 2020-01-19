import React, { useState, ChangeEvent, FormEvent } from "react";
interface AddTodoProps {
  addItem: addItem;
}

export const InputValue: React.FC<AddTodoProps> = ({ addItem }) => {
  const [InputValue, setInputValue] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handelSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addItem(InputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={evt => handelSubmit(evt)}>
      <input
        type="text"
        placeholder="What needs to be Done?"
        onChange={evt => handleChange(evt)}
        value={InputValue}
      />
    </form>
  );
};
