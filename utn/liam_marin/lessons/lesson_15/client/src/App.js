import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { AuthorizationContext, defaultAuthorization } from './context/authorization';
import { useState } from 'react';


const darkTheme = createTheme({
  palette: {
    mode: 'dark', // light or dark
  },
});

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(defaultAuthorization.isLoggedIn);

  return (
    <AuthorizationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthorizationContext.Provider>
  );
}

export default App;