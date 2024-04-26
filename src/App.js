import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login";
import { theme } from "./theme/theme";
import NewUser from "./components/NewUser";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Login /> */}
      <Dashboard />
      {/* <NewUser /> */}
    </ThemeProvider>
  );
}

export default App;
