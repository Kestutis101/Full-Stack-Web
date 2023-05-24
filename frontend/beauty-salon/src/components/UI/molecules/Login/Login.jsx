import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../../atoms/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { DB_URL } from "../../../../App";
import Header from "../../atoms/Header/Header";
import Footer from "../../atoms/Footer/Footer";

export default function Login({ handleLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(DB_URL + "login", {
        email,
        password,
      });

      localStorage.setItem("jwtToken", response.data.token);
      navigate("/clients");
      handleLogged();
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMessage("User with this email not found");
      } else if (error.response.status === 400) {
        setErrorMessage("Invalid password");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <div>
      <Header />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        action={handleLogin}
        errorMessage={errorMessage}
      />
      <Footer />
    </div>
  );
}
