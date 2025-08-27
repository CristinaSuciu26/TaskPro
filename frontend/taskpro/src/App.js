import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import WelcomePage from "./pages/welcome/WelcomePage";
import AuthPage from "./pages/authPage/AuthPage";
import PrivateRoute from "./routes/PrivateRoute";
import HomePage from "./pages/privatePages/HomePage";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes/themes";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./themes/globalStyles";

function App() {
  const themeName = useSelector((state) => state.theme.theme);
  const theme = themes[themeName];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/:boardName"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
