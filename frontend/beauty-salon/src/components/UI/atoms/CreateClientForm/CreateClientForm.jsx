import React, { useState } from "react";
import axios from "axios";
import Header from "../../atoms/Header/Header";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./CreateClientForm.styled";
import { DB_URL } from "../../../../App";
import { emailPattern } from "../../../../App";

export default function CreateClientForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postedClient, setPostedClient] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3) {
      return setErrorMessage(
        "Please provide a name with at least 3 characters"
      );
    } else {
      setErrorMessage("");
    }

    if (surname.length < 3) {
      return setErrorMessage(
        "Please provide a last name with at least 3 characters"
      );
    } else {
      setErrorMessage("");
    }

    if (!emailPattern.test(email)) {
      return setErrorMessage("Please enter a valid email address");
    } else {
      setErrorMessage("");
    }
    const formData = {
      name,
      surname,
      email,
      registeredDate,
    };

    try {
      await axios.post(DB_URL + "clients/register", formData);
      setPostedClient(
        "Client was successfully created, redirecting to clients in..."
      );
      setTimeout(() => {
        navigate("/clients");
      }, 3000);
    } catch (error) {
      console.log(error);
      error.response.status === 409
        ? setErrorMessage(
            "Client with this registration date is already exists"
          )
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
            Name:
            <input
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
              placeholder='Name'
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type='text'
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
                setErrorMessage("");
              }}
              placeholder='Last Name'
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
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
