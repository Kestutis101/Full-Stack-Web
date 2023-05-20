import styled from "styled-components";

export const StyledMainDiv = styled.div`
  font-family: "Caveat", cursive;
  width: 80%;
  margin: auto;

  footer {
    text-align: center;
    margin: 0.5em auto 2rem;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: justify;
  margin: auto;
  font-size: 1.3em;
  img {
    width: 200px;
  }
`;

export const StyledImgDiv = styled.div`
  display: flex;
  justify-content: start;
  text-align: justify;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: #888888 #f5f5f5;

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 8px;
  }
`;
export const StyledImg = styled.img`
  width: 30%;
  margin-right: 1em;
  :last-child {
    margin-right: 0;
  }
`;

export const StyledIconsDiv = styled.div`
  font-size: large;
  margin: 2em auto 0;
  text-align: center;

  a {
    margin: 0.5em;
    color: black;
    position: relative;
    top: 0;
    transition: all 0.3s;
    :hover {
      color: rgb(186, 131, 41, 0.9);
      top: -0.2em;
    }
  }
`;
