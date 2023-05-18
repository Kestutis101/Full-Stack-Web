import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { StyledDiv, StyledImg } from "./Header.styled";

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
    <>
      <StyledDiv>
        <StyledImg
          src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-salon-logo-png-image_6942006.png'
          alt='logo'
        />
        <div>
          <p>Hello!</p>
          {isLoggedIn() && <p>You are logged in</p>}
        </div>

        <nav>
          <Link to='/clients'>Clients</Link>
          <Link to='/createClient'>Create client</Link>
        </nav>
      </StyledDiv>
    </>
  );
}
