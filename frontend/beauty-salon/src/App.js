import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Registration from "./components/Register/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/clients' element={<Main />} />
        <Route path='/createClient' element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
