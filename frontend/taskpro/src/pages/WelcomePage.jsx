import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/auth/register">
        <button>Registration</button>
      </Link>

      <Link to="/auth/login">
        <button>Log In</button>
      </Link>
    </div>
  );
}
