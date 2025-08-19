import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

export const getUserFromToken = (token) => {
  if (!token || !isTokenValid(token)) return null;
  const decoded = jwtDecode(token);
  return { id: decoded.id, name: decoded.name, email: decoded.email };
};
