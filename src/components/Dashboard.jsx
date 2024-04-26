import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import img from "../assets/img2.png";
import { useState } from "react";
import NewUser from "./NewUser";
const drawerWidth = 240;

export default function Dashboard() {
  const [isShow, setShow] = useState(false);
  const handleOpenPopup = () => {
    setShow(true);
  };

  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <NotificationsActiveOutlinedIcon
              fontSize="medium"
              sx={{ backgroundColor: "#F1F7FB", borderRadius: "50%" }}
            />
            <Stack direction={"row"} spacing={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Stack>
                {" "}
                <Typography sx={{ fontWeight: "bold" }}>Virat Kohli</Typography>
                <a
                  href="#"
                  style={{
                    fontSize: "10px",
                    paddingLeft: "5px",
                    textDecoration: "none",
                    color: "#0080FF",
                  }}
                >
                  View Profile
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ pt: "10%", pl: "5%" }}>
          {" "}
          <Typography variant="subtitle1">MENU</Typography>
          <FormControl fullWidth>
            <Select
              sx={{ paddingX: "5px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography variant="h5">User Management</Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Stack>
            <img src={img} alt="img" />
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenPopup}
            >
              Create Users
            </Button>
          </Stack>
        </Box>
      </Box>
      {isShow && <NewUser open={handleOpenPopup} onClose={handleClosePopup} />}
    </Box>
  );
}
