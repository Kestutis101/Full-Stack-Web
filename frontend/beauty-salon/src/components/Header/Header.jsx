import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { StyledMainDiv } from "./Header.styled";

export default function Header() {
  function isLoggedIn() {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      return false;
    }
    const decodedToken = jwtDecode(jwtToken);
    return decodedToken.exp > Date.now() / 1000;
  }
  return (
    <StyledMainDiv>
      <div>
        <p>Hello!</p>
        {isLoggedIn() && <p>You are logged in</p>}
      </div>
      <Link to='/clients'>Clients</Link>
      <Link to='/createClient'>Create client</Link>
    </StyledMainDiv>
  );
}
