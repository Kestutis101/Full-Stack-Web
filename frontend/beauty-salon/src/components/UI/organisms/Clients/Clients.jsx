import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../atoms/Header/Header";
import Modal from "../../molecules/Modal/Modal";
import Footer from "../../atoms/Footer/Footer";
import { DB_URL } from "../../../../App";

import {
  StyledMainDiv,
  StyledHeadingOne,
  StyledTable,
  StyledTableCell,
  StyledButtonEdit,
  StyledButtonDelete,
} from "./Clients.styled";

export default function Clients() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  async function fetchUsers() {
    try {
      const response = await axios.get(DB_URL + "clients");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleEditClick(user) {
    setSelectedUser(user);
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

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
              <tr key={user._id}>
                <StyledTableCell>
                  {user.name} {user.surname}
                </StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>
                  {new Date(user.registeredDate)
                    .toLocaleString("lt-LT")
                    .slice(0, -3)}
                </StyledTableCell>
                <StyledTableCell>
                  <StyledButtonEdit onClick={() => handleEditClick(user)}>
                    Edit
                  </StyledButtonEdit>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledButtonDelete onClick={() => handleDelete(user._id)}>
                    Delete
                  </StyledButtonDelete>
                </StyledTableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledMainDiv>
      {showModal && selectedUser && (
        <Modal
          user={selectedUser}
          onClose={handleClose}
          setShowModal={setShowModal}
          show={showModal.toString()}
          onUserListUpdate={fetchUsers}
        />
      )}
      <Footer />
    </>
  );
}
