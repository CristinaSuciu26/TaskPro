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
    width: 350px;
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
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    width: 302px;
  }
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
  gap: 5px;
  width: 65%;
  margin-top: 14px;
  margin-bottom: 24px;
`;
export const Icon = styled.div`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
export const StyledLabel = styled.label`
  border-radius: 8px;
  cursor: pointer;
  transform: ${({ selected }) => (selected ? "scale(1.2)" : "scale(1)")};
  color: ${({ selected, theme }) => (selected ? theme.text : "#808080")};
`;
export const BackgroundTitle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;
export const BackgroundWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 3px;
  margin-top: 14px;
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid transparent;
  object-fit: cover;
  cursor: pointer;
  transform: ${({ selected }) => (selected ? "scale(1.2)" : "scale(1)")};
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.hoverColor};
  }
`;

export const ButtonWraper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  width: 287px;
  height: 49px;
  cursor: pointer;
  color: ${({ theme }) => theme.icon};
  font-size: 14px;
  gap: 4px;
  border: none;

  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
  @media (min-width: 768px) {
    width: 302px;
  }
`;

export const EditButton = styled.div`
  cursor: pointer;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.modalButton};
  color: ${({ theme }) => theme.iconButton};
  display: flex;
  align-items: center;
  justify-content: center;
`;
