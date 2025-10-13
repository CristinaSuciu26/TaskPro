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

  @media (min-width: 1240px) {
    margin-left: 278px;
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
