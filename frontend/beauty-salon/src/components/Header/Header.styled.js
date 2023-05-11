import styled from "styled-components";

export const StyledMainDiv = styled.div`
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 2% auto 0;

  div {
    display: flex;

    p {
      font-size: 2.5em;
      margin-right: 1em;
    }
  }

  a {
    font-size: 1.2em;
    text-decoration: none;
    color: black;
    transition: color 0.4s;
    :hover {
      color: rgb(142, 97, 31, 0.5);
    }
  }
`;
