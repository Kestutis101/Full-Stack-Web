import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import {
  StyledMainDiv,
  StyledHeadingOne,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
  StyledButtonEdit,
  StyledButtonDelete,
} from "./Main.styled";

export const DB_URL = "http://localhost:4000/";

export default function Main() {
  const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(DB_URL + "clients");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  // function handleEditClick(user) {
  //   console.log(user);
  //   setSelectedUser(user);
  //   setShowModal(true);
  // }

  // function handleCloseModal() {
  //   setShowModal(false);
  // }

  function handleDelete(userId) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(DB_URL + `clients/${userId}`)
        .then(() => {
          setUsers((prev) => prev.filter((user) => user._id !== userId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <Header />
      <StyledMainDiv>
        <StyledHeadingOne>Clients</StyledHeadingOne>
        <StyledTable>
          <tbody>
            {users.map((user) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell>{user.fullName}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>
                  {new Date(user.registeredDate)
                    .toLocaleString("lt-LT", { timeZone: "Europe/Vilnius" })
                    .split(":")
                    .slice(0, 2)
                    .join(":")}
                </StyledTableCell>
                <StyledTableCell>
                  <StyledButtonEdit>Edit</StyledButtonEdit>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledButtonDelete onClick={() => handleDelete(user._id)}>
                    Delete
                  </StyledButtonDelete>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </tbody>
          {/* <button onClick={() => handleEditClick(users)}>
            Edit
          </button> */}
        </StyledTable>
      </StyledMainDiv>
      {/* {showModal && selectedUser && (
        <ModificationModal
          user={selectedUser}
          onClose={handleCloseModal}
          show={showModal}
        />
      )} */}
    </>
  );
}
