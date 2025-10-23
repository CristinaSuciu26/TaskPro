import styled from "styled-components";

export const SelectedBoard = styled.div`
  display: flex;
  align-items: center;
  gap: 176px;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 12px;
  padding-left: 20px;
  padding-right: 30px;
  @media (min-width: 768px) {
    font-size: 18px;

    padding-right: 20px;
  }

  @media (min-width: 1240px) {
    width: 79%;
    padding-right: 0px;
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
