import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "../../atoms/RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import { DB_URL } from "../../../../App";
import Header from "../../atoms/Header/Header";
import Footer from "../../atoms/Footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post(DB_URL + "register", {
        email,
        password,
      });

      if (response.status === 201) {
        setMessage("Registration successful, redirecting to Login...");
      } else {
        setMessage("");
      }

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      if (error.response.status === 400) {
        setMessage("User already exists");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <div>
      <Header />
      <RegisterForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        action={handleRegister}
        message={message}
      />
      <Footer />
    </div>
  );
}
