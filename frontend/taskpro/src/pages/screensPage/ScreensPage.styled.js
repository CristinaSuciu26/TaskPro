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

export const ContentWrapper = styled.div`
  width: 100%;
  height: 519px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-left: 21px;
  &::-webkit-scrollbar {
    max-width: 40px;
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 10px;
    min-height: 40px;
    min-width: 40px;
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
