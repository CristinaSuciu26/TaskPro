import styled from "styled-components";

export const FiltersWrapper = styled.div`
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 10px;
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
  &:hover {
    color: ${({ theme }) => theme.accent};
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
