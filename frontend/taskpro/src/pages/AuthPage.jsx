import { useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function AuthPage() {
  const { id } = useParams();
  return (
    <div>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm />}
    </div>
  );
}
