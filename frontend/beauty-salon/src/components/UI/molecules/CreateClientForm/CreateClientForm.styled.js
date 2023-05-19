import styled from "styled-components";

export const StyledForm = styled.form`
  font-family: "Caveat", cursive;
  text-align: center;

  label {
    display: flex;
    width: 35%;
    margin: 0 auto 1em;
    justify-content: space-between;
    font-size: 1.4em;
  }

  input {
    width: 60%;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 7px;
    :focus {
      outline: none;
      background-color: #f8dda3;
    }
  }

  button {
    border-radius: 10px;
    background-color: #f1f1f1;
    box-shadow: none;
    font-size: 0.7em;
    outline: none;
    cursor: pointer;
    padding: 1em;
    width: 15%;
    transition: background-color 0.5s, box-shadow 0.5s, color 0.5s;
    :hover {
      background-color: #c79e47;
      box-shadow: 1px 1px 3px 2px grey;
      color: white;
    }
  }
`;
