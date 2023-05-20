import React from "react";
import { StyledMainDiv } from "../LoginForm/LoginForm.styled";
import { Link } from "react-router-dom";

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  action,
  message,
}) {
  return (
    <StyledMainDiv>
      <h3>Welcome</h3>
      <h3>Sign In</h3>
      <form onSubmit={action}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <p className='not-a-user'>
          Already User? <Link to='/login'>Log In</Link>
        </p>
        <p
          style={
            message === "Registration successful, redirecting to Login..."
              ? {
                  color: "black",
                  fontFamily: "Caveat, cursive",
                  fontSize: "1.5em",
                }
              : { color: "red" }
          }
        >
          {message}
        </p>
      </form>
    </StyledMainDiv>
  );
}
