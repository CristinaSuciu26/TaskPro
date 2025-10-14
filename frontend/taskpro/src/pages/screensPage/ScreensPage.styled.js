import styled from "styled-components";

export const ScreensPageContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  height: 100dvh;
  width: 100%;
  overflow-y: hidden;
  @media (min-width: 768px) {
    align-items: inherit;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 12px;
  // padding-right: 31px;
  gap: 26px;
  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 20px;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 177px;
  @media (min-width: 1268px) {
    margin-left: 170px;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-top: 10px;
  width: 100%;
  gap: 34px;
  flex-wrap: wrap;
  @media (min-width: 1268px) {
    margin-left: 280px;
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
  @media (min-width: 1268px) {
    font-size: 14px;
    width: 43%;
  }
`;
export const BoardButton = styled.button`
  border: none;
  background-color: transparent;
  padding-right: 3px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
