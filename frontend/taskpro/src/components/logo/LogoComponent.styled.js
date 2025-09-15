import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.icon};
`;

export const LogoText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.logo};
  font-weight: 600;
`;
