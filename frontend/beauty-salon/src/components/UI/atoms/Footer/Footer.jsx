import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter, StyledIconsDiv } from "./Footer.styled";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <StyledIconsDiv>
        <Link to='https://www.facebook.com/'>
          <FaFacebook />
        </Link>
        <Link to='https://www.instagram.com/'>
          <FaInstagram />
        </Link>
        <Link to='https://www.linkedin.com/'>
          <FaLinkedin />
        </Link>
      </StyledIconsDiv>
      <StyledFooter>
        Copyright © 2023, Beauty Salon. All rights reserved.
      </StyledFooter>
    </>
  );
}
