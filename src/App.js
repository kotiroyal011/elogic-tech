import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login";
import { theme } from "./theme/theme";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const data = {
  users: [
    {
      id: 1,
      username: "john",
      EmployeeID: 12312,
      Role: "Admin",
      email: "john@gmail.com",
      Password: "john123",
      group: ["group1", "group2", "group3"],
    },
    {
      id: 2,
      username: "arya",
      EmployeeID: 56743,
      Role: "Admin",
      email: "arya@gmail.com",
      Password: "arya123",
      group: ["group3", "group4", "group3"],
    },
    {
      id: 1,
      username: "clark",
      EmployeeID: 34563,
      Role: "Admin",
      email: "clark@gmail.com",
      Password: "clark123",
      group: ["group1", "group2", "group3"],
    },
  ],
};
localStorage.setItem("data", JSON.stringify(data));
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
