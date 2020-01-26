import styled from "@emotion/styled";

const InputStyle = styled("input")`
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
export default InputStyle;
