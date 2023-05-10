import styled from "styled-components";

export const StyledMainDiv = styled.div`
  font-family: "Caveat", cursive;
  img {
    display: block;
    margin: 0 auto;
    width: 10%;
  }

  h3 {
    display: block;
    text-align: center;
    font-size: 2em;
    :first-of-type {
      font-size: 3em;
      margin: 0;
    }
    :nth-of-type(2) {
      margin: 3em 0 1em 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5em;
      width: 100%;
    }

    label {
      padding: 0.5em;
      font-size: 1.8em;
      width: 6%;
    }

    input {
      border: 1px solid grey;
      border-radius: 10px;
      padding: 0.8em;
      font-size: 1em;
      :focus {
        outline: none;
        background-color: #f8dda3;
      }
    }
  }
  button {
    border-radius: 10px;
    background-color: #f1f1f1;
    box-shadow: none;
    font-size: 0.9em;
    outline: none;
    cursor: pointer;
    padding: 1em;
    width: 15%;
    transition: background-color 0.5s, box-shadow 0.5s;
    :hover {
      background-color: #c79e47;
      box-shadow: 1px 1px 3px 2px grey;
    }
  }
`;
