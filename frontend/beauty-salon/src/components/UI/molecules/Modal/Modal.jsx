import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { StyledBackground, StyledCard } from "./Modal.styled";
import { DB_URL } from "../../../../App";
import { emailPattern } from "../../../../App";

export default function Modal({ user, onClose, show, onUserListUpdate }) {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [registeredDate, setRegisteredDate] = useState(
    moment(user.registeredDate).format("YYYY-MM-DD HH:mm")
  );
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [registeredDateError, setRegisteredDateError] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      if (name.length < 3) {
        return setNameError("Please provide a name with at least 3 characters");
      } else {
        setNameError("");
      }

      if (surname.length < 3) {
        return setSurnameError(
          "Please provide a last name with at least 3 characters"
        );
      } else {
        setSurnameError("");
      }

      if (!emailPattern.test(email)) {
        return setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }

      if (!moment(registeredDate, "YYYY-MM-DD HH:mm", true).isValid()) {
        return setRegisteredDateError(
          "Please enter a valid date and time in the format: YYYY-MM-DD HH:mm"
        );
      } else {
        setRegisteredDateError("");
      }

      await axios.put(DB_URL + `clients/${user._id}`, {
        name,
        surname,
        email,
        registeredDate: moment(
          registeredDate,
          "YYYY-MM-DD HH:mm"
        ).toISOString(),
      });

      onUserListUpdate();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  const handleDateChange = (e) => {
    setRegisteredDate(e.target.value);
  };

  return (
    <div show={show}>
      <StyledBackground>
        <StyledCard>
          <h2>Edit User Info</h2>
          <label>
            Name:
            <input
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError && <span>{nameError}</span>}
          </label>
          <label>
            Last Name:
            <input
              type='text'
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
                setSurnameError("");
              }}
            />
            {surnameError && <span>{surnameError}</span>}
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
              type='text'
              value={registeredDate}
              onChange={handleDateChange}
            />
            {registeredDateError && <span>{registeredDateError}</span>}
          </label>

          <button onClick={handleUpdate}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </StyledCard>
      </StyledBackground>
    </div>
  );
}
