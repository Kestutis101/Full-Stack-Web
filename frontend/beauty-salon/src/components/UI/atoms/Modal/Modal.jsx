import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { StyledBackground, StyledCard } from "./Modal.styled";
import { DB_URL } from "../../organisms/Main/Main";

export default function Modal({ user, onClose, show, onUserListUpdate }) {
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [registeredDate, setRegisteredDate] = useState(
    moment(user.registeredDate).format("YYYY-MM-DD HH:mm")
  );
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleUpdate() {
    try {
      if (!namePattern.test(fullName)) {
        return setFullNameError(
          "Please enter a valid full name (e.g., First Last)"
        );
      } else {
        setFullNameError("");
      }

      if (!emailPattern.test(email)) {
        return setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }

      await axios.put(DB_URL + `clients/${user._id}`, {
        fullName,
        email,
        registeredDate: moment(registeredDate).toString(),
      });

      onUserListUpdate();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div show={show}>
      <StyledBackground>
        <StyledCard>
          <h2>Edit User Info</h2>
          <label>
            Full Name:
            <input
              type='text'
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setFullNameError("");
              }}
            />
            {fullNameError && <span>{fullNameError}</span>}
          </label>
          <label>
            Email:
            <input
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && <span>{emailError}</span>}
          </label>
          <label>
            Registered Date:
            <input
              type='datetime-local'
              value={registeredDate}
              onChange={(e) => setRegisteredDate(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </StyledCard>
      </StyledBackground>
    </div>
  );
}
