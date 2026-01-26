import styled from "styled-components";

export const SelectedBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 12px;
  padding-left: 20px;
  padding-right: 30px;
`;

export const BoardName = styled.span`
  background: ${({ theme }) => theme.background};
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
`;
