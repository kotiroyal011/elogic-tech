import React, { useState, useEffect } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import NewUser from "./NewUser";

const Users = () => {
  const [openNewUserDialog, setOpenNewUserDialog] = useState(false);
  const [users, setUsers] = useState([]);

  // Load initial user data from local storage when component mounts
  useEffect(() => {
    const storedUsers = localStorage.getItem("data");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers).users);
    }
  }, []);

  const handleOpenNewUserDialog = () => {
    setOpenNewUserDialog(true);
  };

  const handleCloseNewUserDialog = () => {
    setOpenNewUserDialog(false);
  };

  const handleSubmitNewUser = (userData) => {
    // Initialize group as an empty array if not provided
    const updatedUserData = {
      ...userData,
      group: userData.group || [], // Ensure group is initialized as an array
    };
    // Add the new user to the local state
    const updatedUsers = [...users, updatedUserData];
    setUsers(updatedUsers);
    // Update local storage with the new user data
    localStorage.setItem("users", JSON.stringify({ users: updatedUsers })); // Saving as object with "users" key
  };

  return (
    <div>
      <Typography variant="h6">User Management &gt; Users</Typography>
      <Stack direction="row" spacing={1}>
        <TextField
          type="text"
          size="small"
          placeholder="Search by user name, user ID, mail ID"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpenNewUserDialog}
        >
          Create Users
        </Button>
      </Stack>
      <NewUser
        open={openNewUserDialog}
        onClose={handleCloseNewUserDialog}
        onSubmit={handleSubmitNewUser}
      />
      {/* Display users in table format */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Groups</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.Role}</TableCell>{" "}
              {/* Changed from "Role" to "role" */}
              <TableCell>{user.EmployeeID}</TableCell>{" "}
              {/* Changed from "EmployeeID" to "employeeId" */}
              <TableCell>
                {user.group &&
                  user.group.map((group, index) => (
                    <span key={index}>
                      {group}
                      {index !== user.group.length - 1 ? ", " : ""}
                    </span>
                  ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
