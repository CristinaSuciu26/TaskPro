import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../redux/auth/authThunks";
import { toast } from "react-toastify";
import {
  FormWrapper,
  Input,
  LoginBtn,
  LoginWrapper,
  ErrorMessageWrapper,
  LinkWrapper,
  StyledNavLink,
} from "./Login.styled";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      toast.success("Logged in successfully!");
    } catch (err) {
      toast.error(err || "Login failed");
    }
  };

  return (
    <LoginWrapper>
      <LinkWrapper>
        <StyledNavLink to="/auth/register">Registration</StyledNavLink>
        <StyledNavLink to="/auth/login">Log in</StyledNavLink>
      </LinkWrapper>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormWrapper as={Form}>
          <div>
            <Field as={Input} type="email" name="email" placeholder="E-mail" />
            <ErrorMessageWrapper component="div" name="email" />
          </div>

          <div>
            <Field
              as={Input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessageWrapper component="div" name="password" />
          </div>

          <LoginBtn type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In Now"}
          </LoginBtn>
        </FormWrapper>
      </Formik>
    </LoginWrapper>
  );
}
