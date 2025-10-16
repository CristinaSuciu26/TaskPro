import styled from "styled-components";

export const SelectedBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  margin-top: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1240px) {
    padding-left: 280px;
  }
`;

export const BoardName = styled.span`
  background: ${({ theme }) => theme.boardOverlay};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  color: white;
`;
