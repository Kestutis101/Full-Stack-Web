import React, { useState, useEffect } from "react";
import axios from "axios";
import { DB_URL } from "../../../../App";
import { StyledPar } from "./HandleBadRequest.styled";
import { useNavigate } from "react-router-dom";

export default function HandleBadRequest() {
  const [badRequest, setBadRequest] = useState("");
  const [redirecting, setRedirecting] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirecting((prevRedirecting) => prevRedirecting - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      await axios.get(DB_URL);
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 404 || error.response.status === 403)
      ) {
        setBadRequest(`Bad Request. Redirecting to the main page in... `);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (redirecting === 0) {
      navigate("/");
    }
  }, [navigate, redirecting]);

  return (
    <>
      {redirecting > 0 && (
        <StyledPar>
          {badRequest}
          {redirecting}
        </StyledPar>
      )}
    </>
  );
}
