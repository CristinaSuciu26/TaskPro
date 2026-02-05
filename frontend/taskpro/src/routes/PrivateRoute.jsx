import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { token, isLoggedIn } = useSelector((state) => state.auth);

  if (!token || !isLoggedIn) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
}
