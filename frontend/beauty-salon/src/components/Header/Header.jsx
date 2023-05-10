import React from "react";
import { StyledMainDiv, StyledLink } from "./Header.styled";

export default function Header() {
  return (
    <StyledMainDiv>
      <StyledLink to='/clients'>Clients</StyledLink>
    </StyledMainDiv>
  );
}
