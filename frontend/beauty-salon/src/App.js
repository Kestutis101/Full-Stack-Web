import { Routes, Route } from "react-router-dom";
import Login from "./components/UI/organisms/Login/Login";
import Main from "./components/UI/organisms/Main/Main";
import CreateClient from "./components/UI/organisms/CreateClient/CreateClient";
import HandleBadRequest from "./components/UI/atoms/HandleBadRequest/HandleBadRequest";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/clients' element={<Main />} />
        <Route path='/createClient' element={<CreateClient />} />
        <Route path='/*' element={<HandleBadRequest />} />
      </Routes>
    </>
  );
}

export default App;
