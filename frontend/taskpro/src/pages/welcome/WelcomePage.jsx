import { Link, Navigate } from "react-router-dom";
import {
  ButtonWrapper,
  ContentWrapper,
  Icon,
  LoginButton,
  ParagraphWrapper,
  RegisterButton,
  TitleWrapper,
  Wrapper,
} from "./Welcome.styled";
import sprite from "../../assets/icons/sprite.svg";
import welcomeImage from "../../assets/images/welcome.png";

export default function WelcomePage() {
  const token = localStorage.getItem("token");

  if (token) return <Navigate to="/home" replace />;
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <img src={`${welcomeImage}`} alt="welcome img"></img>

          <TitleWrapper>
            <Icon>
              {" "}
              <svg width="38" height="38">
                <use xlinkHref={`${sprite}#icon-logo`} />
              </svg>
            </Icon>

            <h3>Task Pro</h3>
          </TitleWrapper>

          <ParagraphWrapper>
            <p>
              Supercharge your productivity and take control of your tasks with
              Task Pro - Don't wait, start achieving your goals now!
            </p>
          </ParagraphWrapper>
        </ContentWrapper>

        <ButtonWrapper>
          <RegisterButton as={Link} to="/auth/register">
            Registration
          </RegisterButton>

          <LoginButton as={Link} to="/auth/login">
            Log In
          </LoginButton>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}
