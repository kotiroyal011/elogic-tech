import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Stack,
  Select,
  MenuItem,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Success from "./Success";

const NewUser = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    Role: "",
    group: [],
    EmployeeID: "",
    password: "",
  });
  const [isOpen, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      group: [value],
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setOpen(true);
  };

  const handleCloseSuccess = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ border: "30px solid #DBE6FF" }}>
        <DialogTitle textAlign="center" fontWeight="bold">
          Create New User
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              color: "inherit",
            }}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: "10px",
            }}
          >
            <Avatar sx={{ width: "100px", height: "100px" }} />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stack direction={"row"} spacing={3} p={1}>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Enter Name
              </Typography>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Enter User Name
              </Typography>
              <TextField
                name="username"
                value={formData.username}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3} p={1}>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Enter E-Mail ID
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <Stack>
                <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                  Select Role
                </Typography>
                <Select
                  name="Role"
                  value={formData.Role}
                  onChange={handleChange}
                  size="small"
                  sx={{ backgroundColor: "#F1F7FB" }}
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </Stack>
              <Stack>
                <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                  Select Group
                </Typography>
                <Select
                  name="group"
                  value={formData.group}
                  onChange={handleChange}
                  size="small"
                  sx={{ backgroundColor: "#F1F7FB" }}
                >
                  <MenuItem value="">Select Group</MenuItem>
                  <MenuItem value="Group 1">Group 1</MenuItem>
                  <MenuItem value="Group 2">Group 2</MenuItem>
                  <MenuItem value="Group 3">Group 3</MenuItem>
                  <MenuItem value="Group 4">Group 4</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3} p={1}>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Employee ID
              </Typography>
              <TextField
                name="EmployeeID"
                value={formData.EmployeeID}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3} p={1}>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Enter Password
              </Typography>
              <TextField
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
            <Stack>
              <Typography sx={{ fontWeight: "550", fontSize: "14px" }}>
                Re-Enter Password
              </Typography>
              <TextField
                size="small"
                fullWidth
                sx={{ backgroundColor: "#E9E9E9" }}
              />
            </Stack>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "15px",
              mb: "30px",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Box>
      {isOpen && <Success open={setOpen} onClose={handleCloseSuccess} />}
    </Dialog>
  );
};
export default NewUser;
