import React from "react";
import { StyledMainDiv } from "./LoginForm.styled";

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
      <img
        src='https://png.pngtree.com/png-clipart/20211116/original/pngtree-salon-logo-png-image_6942006.png'
        alt='logo'
      />
      <h3>Welcome to Beauty Salon</h3>
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
        <p>{errorMessage}</p>
      </form>
    </StyledMainDiv>
  );
}
