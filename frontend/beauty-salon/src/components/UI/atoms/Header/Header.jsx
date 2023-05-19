import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledImg } from "./Header.styled";

export default function Header() {
  const [showLogOut, setShowLogOut] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setShowLogOut(true);
    } else {
      setShowLogOut(false);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    window.alert("You have successfully logged out");
  }

  return (
    <>
      <StyledDiv>
        <div>
          <StyledImg
            src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-salon-logo-png-image_6942006.png'
            alt='logo'
          />
          <p>Beauty Salon</p>
        </div>
        <nav>
          {showLogOut && (
            <Link to='/' onClick={handleLogout}>
              Log Out
            </Link>
          )}
          <Link to='/'>Main Page</Link>
          <Link to='/login'>Log In</Link>
          <Link to='/createClient'>Create client</Link>
          <Link to='/clients'>Clients</Link>
        </nav>
      </StyledDiv>
    </>
  );
}
