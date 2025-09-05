import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  color: red;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 440px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;
