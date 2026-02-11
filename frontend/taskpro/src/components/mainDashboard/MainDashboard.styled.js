import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 334px;
  font-size: 14px;
  height: 56px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const CardWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 14px;
  height: calc(100vh - 275px);
  width: 345px;
  overflow-y: auto;
  overflow-x: hidden;

  scroll-behavior: smooth;
  white-space: nowrap;
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
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 14px;

  gap: 8px;
`;
export const CardColorHigh = styled.div`
  display: flex;
  width: 5px;
  height: 154px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ theme }) => theme.labelHighPriority};
`;
export const CardColorMedium = styled.div`
  display: flex;
  width: 5px;
  height: 154px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ theme }) => theme.labelMediumPriroity};
`;
export const CardColorLow = styled.div`
  display: flex;
  width: 5px;
  height: 154px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ theme }) => theme.labelLowPriority};
`;
export const CardColorNone = styled.div`
  display: flex;
  width: 5px;
  height: 154px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ theme }) => theme.labelWithoutPriority};
`;
export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
export const DescriptionCard = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryText};
  width: 100%;
  max-width: 280px;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
`;

export const Card = styled.div`
  width: 334px;
  height: 154px;
  display: flex;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
`;

export const ColumnContainer = styled.div`
  height: 200px;
  width: 334px;
`;
export const ColumnContent = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  height: calc(100vh - 120px);
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 21px;
  padding-right: 21px;
  scroll-behavior: smooth;
  white-space: nowrap;
  color: ${({ theme }) => theme.text};
  & > div {
    flex: 0 0 auto;
  }

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

export const CardDetails = styled.div`
  display: flex;
  gap: 87px;
  justify-content: space-between;
`;
export const LabelPriorityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const LabelColorHigh = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.labelHighPriority};
`;
export const LabelColorMedium = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.labelMediumPriroity};
`;
export const LabelColorWithoutPriority = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.labelWithoutPriority};
`;
export const LabelColorLow = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.labelLowPriority};
`;
export const CardDetailsWrapper = styled.div`
  display: flex;
  gap: 14px;
`;
export const CardPriority = styled.span`
  font-size: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryText};
`;
export const PriorityValue = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
export const DeadlineValue = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
export const CardPriorityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardDeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardDeadline = styled.span`
  font-size: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryText};
`;
export const AddButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.addColumnBtn};
  color: ${({ theme }) => theme.addColumnIcon};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  gap: 8px;
`;
export const AnotherCradButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;

  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  gap: 8px;
  margin-top: 14px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: white;
  }
`;
