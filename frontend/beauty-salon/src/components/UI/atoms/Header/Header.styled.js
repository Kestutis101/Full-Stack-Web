import styled from "styled-components";

export const StyledDiv = styled.div`
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 2% auto 0;

  img {
    display: block;
    margin: auto 0;
    width: 20%;
    height: 15%;
  }

  div {
    display: flex;
    width: 50%;

    p {
      font-size: 2.5em;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
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

export const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 10%;
`;
