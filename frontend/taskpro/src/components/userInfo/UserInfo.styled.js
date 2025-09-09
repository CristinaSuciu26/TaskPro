import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const UserImg = styled.img`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 32px;
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;
