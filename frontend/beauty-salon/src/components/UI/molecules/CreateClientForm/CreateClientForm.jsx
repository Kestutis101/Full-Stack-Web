import React, { useState } from "react";
import axios from "axios";
import { DB_URL } from "../../organisms/Main/Main";
import { StyledForm } from "./CreateClientForm.styled";
import Header from "../../atoms/Header/Header";

export default function CreateClientForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postedClient, setPostedClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullNameRegex = /^(\w+)\s(\w+)$/;
    if (!fullName.match(fullNameRegex)) {
      setErrorMessage("Please provide first name and last name");
      return;
    }

    const formData = {
      fullName,
      email,
      registeredDate,
    };

    try {
      await axios.post(DB_URL + "clients/register", formData);
      setPostedClient(
        "Client was successfully created, redirecting to clients..."
      );
      setTimeout(() => {
        window.location.href = "http://localhost:3000/clients";
      }, 3000);
    } catch (error) {
      error.response && error.response.status === 409
        ? setErrorMessage("Client or email already exists")
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
            Registration Date:
            <input
              type='datetime-local'
              value={registeredDate}
              onChange={(e) => setRegisteredDate(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: postedClient ? "black" : "red",
          }}
        >
          {postedClient || errorMessage}
        </p>
      </StyledForm>
    </>
  );
}
