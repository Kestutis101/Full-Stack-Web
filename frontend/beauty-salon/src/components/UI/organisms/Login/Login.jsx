import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      localStorage.setItem("jwtToken", response.data.token);
      navigate("/clients");
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
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        action={handleLogin}
        errorMessage={errorMessage}
      />
    </div>
  );
}
