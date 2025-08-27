import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { registerUser } from "../../redux/auth/authThunks";
import {
  ErrorMessageWrapper,
  FormWrapper,
  Input,
  LinkWrapper,
  RegisterBtn,
  RegisterWrapper,
  StyledNavLink,
} from "./Register.styled";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  const handleSubmit = (values) => {
    dispatch(registerUser(values));
  };
  return (
    <div>
      <RegisterWrapper>
        <LinkWrapper>
          <StyledNavLink to="/auth/register">Registration</StyledNavLink>
          <StyledNavLink to="/auth/login">Log in</StyledNavLink>
        </LinkWrapper>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormWrapper>
            <label htmlFor="name"></label>
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessageWrapper component="div" name="name" />

            <div>
              <label htmlFor="email"></label>
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessageWrapper component="div" name="email" />
            </div>

            <div>
              <label htmlFor="password"></label>
              <Input type="password" name="password" placeholder="Password" />
              <ErrorMessageWrapper component="div" name="password" />
            </div>

            <RegisterBtn type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register Now"}
            </RegisterBtn>

            {error && <div style={{ color: "red" }}>{error}</div>}
          </FormWrapper>
        </Formik>
      </RegisterWrapper>
    </div>
  );
}
