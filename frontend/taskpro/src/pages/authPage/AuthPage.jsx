import { useParams } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/registerForm/RegisterForm";
import { AuthWrapper } from "./Auth.styled";

export default function AuthPage() {
  const { id } = useParams();
  return (
    <div>
      <AuthWrapper>
        {id === "login" && <LoginForm />}
        {id === "register" && <RegisterForm />}
      </AuthWrapper>
    </div>
  );
}
