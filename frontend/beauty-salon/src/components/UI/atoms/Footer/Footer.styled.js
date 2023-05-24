import styled from "styled-components";

export const StyledFooter = styled.footer`
font-family: "Caveat", cursive;
  text-align: center;
  margin: 0.5em auto 2rem;
`;

export const StyledIconsDiv = styled.div`
  font-size: large;
  margin: 2em auto 0;
  text-align: center;

  a {
    margin: 0.5em;
    color: white;
    position: relative;
    top: 0;
    transition: all 0.3s;
    :hover {
      color: rgb(186, 131, 41, 0.9);
      top: -0.2em;
    }
  }
`;
