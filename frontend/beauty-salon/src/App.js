import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/UI/atoms/Login/Login";
import Main from "./components/UI/organisms/Main/Main";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      {!isLoggedIn ? (
        <Route
          path='*'
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
      ) : (
        <Navigate to='/' replace />
      )}
    </Routes>
  );
}

export default App;
