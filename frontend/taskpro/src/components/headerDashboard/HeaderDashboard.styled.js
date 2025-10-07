import styled from "styled-components";

export const SelectedBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 100%;
  font-size: 14px;
  margin-top: 12px;
  padding-left: 23px;
  padding-right: 31px;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1240px) {
    padding-left: 280px;
  }
`;

export const BoardName = styled.span`
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
`;
