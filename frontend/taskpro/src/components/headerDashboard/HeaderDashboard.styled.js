import styled from "styled-components";

export const SelectedBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  margin-top: 12px;
  padding-left: 23px;
  padding-right: 31px;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1240px) {
    padding-left: 280px;
  }
`;
