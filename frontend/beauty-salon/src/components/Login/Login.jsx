import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../LoginForm/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response);

      localStorage.setItem("jwtToken", response.data.token);
      window.location.assign("http://localhost:3000/clients");
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
