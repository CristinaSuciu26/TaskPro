import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 14;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 335px;
  height: 355px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 24px;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
export const SendButton = styled.button`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  cursor: pointer;
  border: none;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
export const ModalTitle = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const Input = styled.input`
  width: 287px;
  height: 49px;
  margin-top: 24px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const Textarea = styled.textarea`
  width: 287px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
