import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/registerClient' element={<Register />} />
        <Route path='/clients' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
