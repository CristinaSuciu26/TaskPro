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
  gap: 9px;
  margin-top: -33px;
`;

export const MyBoardsTitle = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 45px;
  width: 100%;
  font-size: 14px;
  margin-top: 13px;

  color: ${({ theme }) => theme.secondaryText};
`;

export const ButtonText = styled.span`
  width: 60%;
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

export const DashboardListWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 135px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const DashboardList = styled.ul`
  width: 190px;
`;
export const DashboardListItems = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
  gap: 15px;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0 4px 0px -2px ${({ theme }) => theme.accent};
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    width: 111%;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  margin-left: 18px;
  gap: 5px;
`;
export const Icon = styled.svg`
  color: ${({ theme }) => theme.secondaryText};
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

export const NeedHelp = styled.div`
  width: 197px;
  height: 200px;
  border-radius: 8px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.needHelp};
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  padding: 14px;

  @media (min-width: 768px) {
    width: 212px;
    height: 230px;
    margin-left: 8px;
  }
`;

export const NeedHelpImg = styled.img`
  width: 54px;
  height: 72px;
`;

export const NeedHelpParagraph = styled.p`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const NeedHelpSpan = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const NeedHelpButton = styled.button`
  border: none;
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  margin-top: 5px;
  background-color: transparent;
`;

export const NeedHelpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
