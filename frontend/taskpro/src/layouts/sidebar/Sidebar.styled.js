import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  background: rgba(114, 110, 110, 0.5);
  position: absolute;
  top: 0;
  z-index: 11;
`;

export const SidebarContent = styled.div`
  width: 225px;
  height: 100vw;
  background-color: ${({ theme }) => theme.sidebar};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 12;
  position: absolute;
  top: 0;
  padding: 14px;
  @media (min-width: 768px) {
    width: 260px;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  left: 20px;
  color: ${({ theme }) => theme.text};
`;

export const CreateBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 14px;
`;

export const MyBoardsTitle = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 45px;
  width: 85%;
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
`;
export const CreateBoardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonText};

  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
export const IconWrapper = styled.div`
  margin-bottom: -20px;
`;
