import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Header from "../Header/Header";

export default function Main() {
  const [users, setUsers] = useState([]);

  function isLoggedIn() {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      return false;
    }
    const decodedToken = jwtDecode(jwtToken);
    return decodedToken.exp > Date.now() / 1000;
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/clients");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <p>Hello</p>
      {isLoggedIn() && <p>You are logged in</p>}
      <h1>Users</h1>
      <div className='user-table'>
        {users.map((user) => (
          <div className='user-row' key={user._id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>
              {new Date(user.registeredDate)
                .toLocaleString("lt-LT", { timeZone: "Europe/Vilnius" })
                .split(":")
                .slice(0, 2)
                .join(":")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
