import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from "./pages/Nav"
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Login from "./pages/Login"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
