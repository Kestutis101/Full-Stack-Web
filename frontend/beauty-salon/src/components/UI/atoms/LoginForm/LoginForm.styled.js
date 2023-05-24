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
    font-size: 1.8em;
    :first-of-type {
      font-size: 2.5em;
      margin: 0;
    }
    :nth-of-type(2) {
      margin: 2em 0 1em 0;
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
      font-size: 1.2em;
      width: 6%;
    }

    input {
      border: 1px solid grey;
      border-radius: 10px;
      padding: 0.8em;
      font-size: 0.8em;
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
  p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1em;
    color: red;
    margin: 0;
  }
  .not-a-user {
    font-family: "Caveat", cursive;
    color: black;
    font-size: 1.5em;
    a {
      text-decoration: none;
      color: white;
      position: relative;
      top: 0;
      transition: all 0.3s;
      :hover {
        color: rgb(186, 131, 41, 0.8);
        top: -0.2em;
      }
    }
  }
`;

export const StyledImg = styled.img``;
