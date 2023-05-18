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
    margin: 0;
    width: 15%;
  }

  div {
    display: flex;

    p {
      font-size: 2.5em;
      margin-right: 1em;
    }
  }

  nav {
    width: 28%;
  }

  a {
    font-size: 1.2em;
    text-decoration: none;
    color: black;
    transition: color 0.4s;
    :first-child {
      padding-right: 10%;
    }
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
