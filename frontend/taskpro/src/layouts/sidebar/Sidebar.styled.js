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
