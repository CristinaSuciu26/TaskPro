import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(114, 110, 110, 0.5);
  position: absolute;
  top: 0;
  z-index: 11;
  @media (min-width: 1240px) {
    display: none;
  }
`;

export const SidebarContent = styled.div`
  width: clamp(225px, 20vw, 320px);
  height: 100dvh;
  background-color: ${({ theme }) => theme.sidebar};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 12;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 260px;
  }
`;

export const LogoWrapper = styled.div`
  padding-left: 15px;
`;
export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding-left: 15px;
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  left: 20px;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1240px) {
    display: none;
  }
`;

export const CreateBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 9px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const MyBoardsTitle = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.sidebarText};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 55px;
  width: 100%;
  font-size: 14px;
  @media (min-width: 768px) {
    gap: 75px;
  }
  color: ${({ theme }) => theme.logo};
`;

export const ButtonText = styled.span`
  width: 45%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const CreateBoardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonText};

  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;

export const DashboardListWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;
export const DashboardList = styled.ul`
  width: 100%;
  max-height: 35vh;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DashboardListItems = styled.li`
  width: 100%;
  height: 61px;
  display: flex;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.sidebarText};

  gap: 5px;
`;

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  height: 50px;
  padding-left: 23px;
  padding-right: 19px;
  justify-content: space-evenly;
  border-right: ${({ selected, theme }) =>
    selected ? `3px solid ${theme.hoverColor}` : "3px solid rgba(0,0,0,0.1)"};
  background-color: ${({ selected, theme }) =>
    selected ? theme.needHelp : "3px solid rgba(0,0,0,0.1)"};
`;

export const IconContainer = styled.div`
  display: flex;
  margin-left: 18px;
  gap: 5px;
`;
export const Icon = styled.svg`
  color: ${({ theme }) => theme.sidebarText};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.2);
  }
`;
export const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: -3px;
  white-space: nowrap;
  width: 100px;
  display: inline-block;
  vertical-align: middle;
`;
export const NeedHelpWrapper = styled.div`
  position: absolute;
  bottom: 90%;
  right: 0px;
  width: 197px;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  background: ${({ theme }) => theme.needHelp};
  pointer-events: none;
  opacity: 0;
  transform: translateY(10%);
  transition: transform 0.5s ease, opacity 0.3s ease 0.1s;
`;
export const NeedHelp = styled.div`
  width: 197px;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 15px;
  position: relative;
  border-radius: 8px;
  margin-left: 5px;
  background: ${({ theme }) => theme.needHelp};
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-left: 10px;
  }
  @media (min-width: 1240px) {
    margin-top: 20px;
  }
  &:hover ${NeedHelpWrapper} {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const NeedHelpButton = styled.button`
  border: none;
  display: flex;
  gap: 15px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 18px;
  background-color: transparent;
  color: ${({ theme }) => theme.logo};
  font-weight: 500;
`;

export const NeedHelpImg = styled.img`
  width: 54px;
  height: 72px;
`;

export const NeedHelpParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 112%;
  @media (min-width: 768px) {
    font-size: 14px;
    width: 106%;
  }
`;
export const NeedHelpSpan = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.logo};
  margin-bottom: 10px;
  font-size: 14px;
  margin-left: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    align-items: self-start;
  }
`;
