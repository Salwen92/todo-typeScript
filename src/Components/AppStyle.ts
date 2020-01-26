import styled from "@emotion/styled";

export const ButtonCount = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  background: none;
  border: 1px solid white;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  transition: 250ms ease-out;
`;
export const Button = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  border: 1px solid #4fc08d;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  transition: 250ms ease-out;
  &:hover,
  &:focus {
    color: #fff;
    background: #4fc08d;
    outline: none;
  }
`;
export const DeleteButton = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  border: 1px solid #d16ba5;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #d16ba5;
  transition: 250ms ease-out;
  &:hover {
    color: black;
    background: #d16ba5;
    outline: none;
  }
`;

export const Container = styled("div")`
  display: flex;
  overflow: scroll;
  justify-content: top;
  height: 99vh;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(25, 25, 25, 0.25);
`;
export const Wrapper = styled("div")`
  display: flex;
  width: 45%;
  flex-direction: column;
  background: white;
  border-radius: 20px;
`;
export const ButttonWrapper = styled("div")`
  display: block;
  flex-direction: row;
  background: white;
  border-radius: 20px;
`;
