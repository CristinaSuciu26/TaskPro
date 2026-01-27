import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";

export const LoginWrapper = styled.div`
  width: 335px;
  height: 363px;
  background-color: #151515;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  font-weight: 500;
  /* de la 768px */
  @media (min-width: 768px) {
    width: 424px;
    height: 395px;
  }

  /* de la 1440px */
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 15px;
`;

export const Input = styled(Field)`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  padding: 14px 18px;
  background-color: transparent;
  border: 1px solid #bedbb0;
  color: white;
  font-size: 14px;
`;

export const LoginBtn = styled.button`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  color: #161616;
  background-color: #bedbb0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: #9dc888;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-right: 110px;
  font-size: 18px;
  font-weight: 500;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: grey;

  &.active {
    color: white; 
  }
`;
export const ErrorMessageWrapper = styled(ErrorMessage)`
  height: 20px;
  color: rgb(255, 48, 64);
  font-size: 11px;
  padding: 5px;
`;
export const PasswordWrapper = styled.div`
  position: relative;
  align-items: center;
  
  .toggle-eye {
    position: absolute;
    right: 10px;
    top: 15px;
    cursor: pointer;
    color: #998f8f4d;
  }
`;
