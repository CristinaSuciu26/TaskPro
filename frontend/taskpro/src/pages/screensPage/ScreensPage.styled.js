import styled from "styled-components";

export const ScreensPageContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  height: 100dvh;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-left: 120px;
    width: 130%;
  }

  @media (min-width: 1240px) {
    width: 100%;
    margin-left: 450px;
    padding-left: 25px;
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 14px;
    width: 50%;
  }
`;

export const BoardButton = styled.button`
  border: none;
  background-color: transparent;
  padding-right: 3px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
