import { Navigate, useLocation } from "react-router-dom";
import { isTokenValid } from "../utils/token";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token || !isTokenValid(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
}
