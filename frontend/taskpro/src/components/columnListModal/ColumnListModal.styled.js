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
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 235px;
  height: 150px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 30px;
`;
export const ColumnListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 10px;
    height: 5px;
  }
`;
export const ColumnNameWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isCurrent",
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ isCurrent, theme }) =>
    isCurrent ? theme.hoverColor : theme.text};
`;
export const ColumnTitle = styled.h3`
  font-size: 14px;
  width: 100%;
`;
