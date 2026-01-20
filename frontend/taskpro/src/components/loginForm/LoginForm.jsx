import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  PasswordWrapper,
} from "./Login.styled";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loader } from "../loader/Loader";

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
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

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
            <Field
              as={Input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessageWrapper component="div" name="email" />
          </div>
          <PasswordWrapper>
            <div>
              <Field
                as={Input}
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <span className="toggle-eye" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
              <ErrorMessageWrapper component="div" name="password" />
            </div>
          </PasswordWrapper>

          <LoginBtn type="submit" disabled={loading}>
            {loading ? <Loader /> : "Log In Now"}
          </LoginBtn>
        </FormWrapper>
      </Formik>
    </LoginWrapper>
  );
}
