import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ParagraphWrapper = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  padding: 20px;
  color: ${({ theme }) => theme.secondaryText};
  @media (min-width: 375px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  gap: 10px;
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  border: none;
  height: 49px;
  text-decoration: none;
  color: #fff;
  background-color: #161616;
  border-radius: 8px;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  border: none;
  height: 49px;
  text-decoration: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};

  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
    color: #fff;
  }
`;
