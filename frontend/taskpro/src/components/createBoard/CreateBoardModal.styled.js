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
  height: 440px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 24px;
  z-index: 15;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const InputTitle = styled.input`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  padding: 18px 14px;
  border: 1px solid ${({ theme }) => theme.accent};
  font-size: 14px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.background};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const IconTitle = styled.span`
  margin-top: 24px;
  color: ${({ theme }) => theme.text};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 80%;
  margin-top: 14px;
  margin-bottom: 24px;
`;
