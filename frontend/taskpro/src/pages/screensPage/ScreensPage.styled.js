import styled from "styled-components";

export const ScreensPageContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    align-items: inherit;
  }

  @media (min-width: 1240px) {
    margin-left: 250px;
    padding-left: 25px;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;

  @media (min-width: 1240px) {
    padding-right: 310px;
  }
  margin-top: 177px;
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
