import styled from "styled-components";

export const FiltersWrapper = styled.div`
  background: ${({ theme }) => theme.boardOverlay};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: white;
`;

export const FilterButton = styled.button`
  font-size: 14px;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
