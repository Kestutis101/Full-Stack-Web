import React, { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [postedClient, setPostedClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      registeredDate,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/clients/register",
        formData
      );
      console.log(response.data);
      setPostedClient("User was successfully added, redirecting to clients...");
      setTimeout(() => {
        window.location.href = "http://localhost:3000/clients";
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full name:
        <input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Registered Date:
        <input
          type='datetime-local'
          value={registeredDate}
          onChange={(e) => setRegisteredDate(e.target.value)}
        />
      </label>
      <button type='submit'>Submit</button>
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "rgba(167, 167, 167, 0.8)",
        }}
      >
        {postedClient}
      </p>
    </form>
  );
}
