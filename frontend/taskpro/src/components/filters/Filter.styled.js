import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const FilterButton = styled.button`
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
