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
