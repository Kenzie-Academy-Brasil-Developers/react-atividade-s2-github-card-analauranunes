import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  div {
    display: flex;
    gap: 10px;
  }

  input {
    border-style: none;
    padding: 12px;
    outline: none;
    border-radius: 3px;
    border: 1px solid blue;
  }

  button {
    padding: 12px;
    border-style: none;
    border-radius: 3px;
    cursor: pointer;
    transition-duration: 1.5s;
    border: 1px solid blue;
    color: blue;
  }

  button:hover {
    color: white;
    background-color: blue;
    transition-duration: 1.5s;
  }

  span {
    align-self: flex-start;
    color: white;
    font-size: 12px;
    margin-left: 3px;
  }
`;
