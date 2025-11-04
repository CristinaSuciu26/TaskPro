import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 334px;
  font-size: 14px;
  height: 56px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const CardWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 14px;
  height: calc(100vh - 275px);
  width: 345px;
  overflow-y: auto;
  overflow-x: hidden;

  scroll-behavior: smooth;
  white-space: nowrap;
  &::-webkit-scrollbar {
    max-width: 40px;
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 10px;
    min-height: 40px;
    min-width: 40px;
  }
`;
export const Card = styled.div`
  width: 334px;
  height: 154px;
  display: flex;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

export const ColumnContainer = styled.div`
  height: 200px;
  width: 334px;
`;
export const ColumnContent = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  height: calc(100vh - 120px);
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 21px;
  scroll-behavior: smooth;
  white-space: nowrap;

  & > div {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    max-width: 40px;
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 10px;
    min-height: 40px;
    min-width: 40px;
  }
`;
export const AddButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.addColumnBtn};
  color: ${({ theme }) => theme.addColumnIcon};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  gap: 8px;
`;
export const AnotherCradButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;

  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  gap: 8px;
  margin-top: 14px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }
`;
