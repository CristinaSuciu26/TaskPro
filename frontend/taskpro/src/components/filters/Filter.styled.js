import styled from "styled-components";

export const FiltersWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  padding-left: 10px;
  padding-right: 10px;
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
  color: ${({ theme }) => theme.text};
`;

export const FilterButton = styled.button`
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  cursor: pointer;
`;
