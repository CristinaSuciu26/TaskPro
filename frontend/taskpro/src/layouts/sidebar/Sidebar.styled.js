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
  max-height: 100dvh;

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
export const SidebarBody = styled.div`
  flex: 0 1 auto;
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
  padding-left: 10px;
  padding-right: 10px;
`;

export const MyBoardsTitle = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.sidebarText};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 75px;
  width: 100%;
  font-size: 14px;

  color: ${({ theme }) => theme.logo};
`;

export const ButtonText = styled.span`
  width: 45%;
  @media (min-width: 768px) {
    width: 35%;
  }
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

export const DashboardListWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
`;
export const DashboardList = styled.ul`
  width: 100%;
  height: 150px;
  max-height: 150px;
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
  border-right: 3px solid red;
  height: 50px;
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
  bottom: 100%;
  right: 2px;
  width: 212px;
  padding: 16px;

  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: opacity 0.25s ease, transform 0.25s ease;

  @media (min-width: 768px) {
    width: 240px;
  }
`;
export const NeedHelpButton = styled.button`
  border: none;
  display: flex;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 18px;
  background-color: transparent;
  color: ${({ theme }) => theme.logo};
`;
export const NeedHelp = styled.div`
  width: 90%;
  height: 70px;
  position: relative;
  border-radius: 8px;
  margin-top: 0px;
  margin-left: 10px;

  color: ${({ theme }) => theme.text};
  font-weight: 400;

  @media (min-width: 1240px) {
    margin-top: 20px;
  }
  &:hover ${NeedHelpWrapper} {
    opacity: 1;
    max-height: 300px;
  }
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
`;
