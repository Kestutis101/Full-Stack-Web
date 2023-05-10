import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../LoginForm/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hint, setHint] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response.status);
      if (!password) {
        setHint();
      }
      localStorage.setItem("jwtToken", response.data.token);
      window.location.href("http://localhost:3000/main");
    } catch (error) {
      console.log(error);
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
        hint={hint}
      />
    </div>
  );
}
