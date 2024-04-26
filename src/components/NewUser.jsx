import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

const NewUser = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New User</DialogTitle>
      <DialogContent>
        <TextField label="Name" fullWidth />
        <TextField label="Username" fullWidth />
        <TextField label="Email ID" fullWidth />
        {/* Add other input fields */}
        <Button variant="contained" color="primary">
          Create User
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewUser;
