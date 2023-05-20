import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/UI/molecules/Login/Login";
import Main from "./components/UI/organisms/Main/Main";
import Clients from "./components/UI/organisms/Clients/Clients";
import CreateClient from "./components/UI/organisms/CreateClient/CreateClient";
import HandleBadRequest from "./components/UI/atoms/HandleBadRequest/HandleBadRequest";
import Register from "./components/UI/molecules/Register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogged() {
    if (window.localStorage.getItem("jwtToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Main handleLogged={handleLogged} />} />
      <Route path='/signUp' element={<Register />} />
      <Route path='/login' element={<Login handleLogged={handleLogged} />} />
      <Route
        path='/clients'
        element={isLoggedIn ? <Clients /> : <Navigate to='/' replace />}
      />
      <Route
        path='/createClient'
        element={isLoggedIn ? <CreateClient /> : <Navigate to='/' replace />}
      />
      <Route path='/*' element={<HandleBadRequest />} />
    </Routes>
  );
}

export default App;
