import { createTheme } from "@mui/material/styles";

const colors = {
  main: "#0080FF",
  hover: "#147EE8",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.main,
      dark: colors.hover,
    },
  },
});
