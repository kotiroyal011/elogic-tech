import React from "react";
import img from "../assets/img.png";
import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Login = () => {
  return (
    <Box>
      <Stack direction="row" height="100vh">
        <img src={img} alt="login" width="50%" />
        <Box alignContent="center" margin="auto" width={"35%"}>
          <Typography variant="h4" align="center">
            Welcome to <br></br>Industrial IoT Portal
          </Typography>
          <Typography align="center" py={"2%"}>
            START AUTOMATING YOUR INDUSTRY
          </Typography>
          <Stack spacing={3}>
            <TextField
              variant="outlined"
              placeholder="Enter user ID or E-mail"
              sx={{ backgroundColor: "#DBE6FF" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Enter Password"
              sx={{ backgroundColor: "#DBE6FF" }}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction={"row"} alignContent="center">
              {" "}
              <Checkbox sx={{ display: "inline" }} />
              <Typography sx={{ pt: "8px" }}> Save Password</Typography>
            </Stack>
            <Button
              variant="contained"
              size="small"
              sx={{
                p: "10px",
                "&:active": {
                  backgroundColor: "#2F7DCB",
                },
              }}
            >
              LOGIN
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
