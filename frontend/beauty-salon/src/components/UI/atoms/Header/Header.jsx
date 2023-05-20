import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledImg } from "./Header.styled";

export default function Header() {
  const [showLogOut, setShowLogOut] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);
  const [showCreateClient, setShowCreateClient] = useState(false);
  const [showClients, setShowClients] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      setShowLogOut(true);
      setShowLogIn(false);
      setShowCreateClient(true);
      setShowClients(true);
    } else {
      setShowLogOut(false);
      setShowLogIn(true);
      setShowCreateClient(false);
      setShowClients(false);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    window.alert("You have successfully logged out");
    window.location.reload();
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
          <Link to='/'>Main Page</Link>
          <Link to='/register'>Register</Link>
          {showCreateClient && <Link to='/createClient'>Create client</Link>}
          {showClients && <Link to='/clients'>Clients</Link>}
          {showLogIn && <Link to='/login'>Log In</Link>}
          {showLogOut && (
            <Link to='/' onClick={handleLogout}>
              Log Out
            </Link>
          )}
        </nav>
      </StyledDiv>
    </>
  );
}
