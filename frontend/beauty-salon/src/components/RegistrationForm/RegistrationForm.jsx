import React, { useState } from "react";
import axios from "axios";
import { DB_URL } from "../Main/Main";
import { StyledForm } from "./RegistrationForm.styled";
import Header from "../Header/Header";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postedClient, setPostedClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      registeredDate,
    };

    try {
      const response = await axios.post(DB_URL + "clients/register", formData);
      console.log(response.data);
      setPostedClient("User was successfully added, redirecting to clients...");
      setTimeout(() => {
        window.location.href = "http://localhost:3000/clients";
      }, 3000);
    } catch (error) {
      error.response && error.response.status === 409
        ? setErrorMessage("User or email already exists")
        : console.log(error);
    }
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <h1>Client Registration</h1>
          <label>
            Full name:
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Name Surname'
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email@email.com'
            />
          </label>
        </div>
        <div>
          <label>
            Registered Date:
            <input
              type='datetime-local(lt-LT)'
              value={registeredDate}
              onChange={(e) => setRegisteredDate(e.target.value)}
              placeholder='2000-01-01 00:00'
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: postedClient ? "rgba(167, 167, 167, 0.8)" : "red",
          }}
        >
          {postedClient || errorMessage}
        </p>
      </StyledForm>
    </>
  );
}
