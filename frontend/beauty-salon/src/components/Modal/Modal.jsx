import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { StyledBackground, StyledCard } from "./Modal.styled";
import { DB_URL } from "../Main/Main";

export default function Modal({ user, onClose, show, onUserListUpdate }) {
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [registeredDate, setRegisteredDate] = useState(
    moment(user.registeredDate).format("YYYY-MM-DD HH:mm")
  );
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isUnchanged, setIsUnchanged] = useState(true);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  async function handleUpdate() {
    try {
      const namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!namePattern.test(fullName)) {
        setFullNameError("Please enter a valid full name (e.g., First Last)");
        setIsUnchanged(false);
        return;
      } else {
        setFullNameError("");
      }

      if (!emailPattern.test(email)) {
        setEmailError("Please enter a valid email address");
        setIsUnchanged(false);
        return;
      } else {
        setEmailError("");
      }

      if (user.fullName === fullName && user.email === email) {
        setIsUnchanged(true);
      }

      await axios.put(DB_URL + `clients/${user._id}`, {
        fullName,
        email,
        registeredDate: moment(registeredDate).toString(),
      });

      onUserListUpdate();
      setIsSaveClicked(true);
      setIsUnchanged(true);
      setFullNameError("");
      setEmailError("");
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
            First Name:
            <input
              type='text'
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setFullNameError("");
                setIsUnchanged(false);
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
                setIsUnchanged(false);
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
          {isUnchanged && isSaveClicked && (
            <span className='nothing-change'>Nothing has been changed.</span>
          )}
        </StyledCard>
      </StyledBackground>
    </div>
  );
}
