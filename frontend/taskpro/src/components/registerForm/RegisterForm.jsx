import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser } from "../../redux/auth/authThunks";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  ErrorMessageWrapper,
  FormWrapper,
  Input,
  LinkWrapper,
  PasswordWrapper,
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
  const [show, setShow] = useState(false);

  const { token, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      toast.success("Registered successfully!");
    } catch (err) {
      toast.error(err || "Registration failed");
    }
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
          <FormWrapper as={Form}>
            <div>
              <label htmlFor="name"></label>
              <Input type="text" name="name" placeholder="Name" />
              <ErrorMessageWrapper component="div" name="name" />
            </div>
            <div>
              <label htmlFor="email"></label>
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessageWrapper component="div" name="email" />
            </div>
            <div>
              <PasswordWrapper>
                <label htmlFor="password"></label>
                <Input
                  name="password"
                  placeholder="Password"
                  type={show ? "text" : "password"}
                />
                <ErrorMessageWrapper component="div" name="password" />
                <span className="toggle-eye" onClick={() => setShow(!show)}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
              </PasswordWrapper>
            </div>
            <RegisterBtn type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register Now"}
            </RegisterBtn>
          </FormWrapper>
        </Formik>
      </RegisterWrapper>
    </div>
  );
}
