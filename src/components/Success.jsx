import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Success = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <DialogActions>
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
          </DialogActions>
          <Stack alignItems="center">
            <CheckCircleIcon
              fontSize="large"
              color="primary"
              sx={{ width: "70px", height: "70px" }}
            />
            <Typography
              textAlign="center"
              sx={{ color: "#0080FF" }}
              variant="h5"
            >
              {" "}
              successful
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            You have successfully added <br /> user to the IoT Portal.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Success;
