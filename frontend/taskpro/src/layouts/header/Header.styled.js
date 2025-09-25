import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 14px;
`;

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`;

export const ThemeList = styled.ul`
  cursor: pointer;
  font-size: 14px;
  width: 100px;
  height: 107px;
  background-color: #fff;
  color: #161616;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  z-index: 5;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const ThemeListItem = styled.li`
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
`;
