import React from "react";
import { StyledMainDiv } from "./LoginForm.styled";
import { Link } from "react-router-dom";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  action,
  errorMessage,
}) {
  return (
    <StyledMainDiv>
      <h3>Welcome</h3>
      <h3>Please Log In</h3>
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
          Not a User? <Link to='/signUp'>Sign in</Link>
        </p>
        <p>{errorMessage}</p>
      </form>
    </StyledMainDiv>
  );
}
