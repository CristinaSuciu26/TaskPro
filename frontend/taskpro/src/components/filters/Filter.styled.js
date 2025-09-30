import styled from "styled-components";

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
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: -3px;
  @media (min-width: 768px) {
  margin-top: -7px;
  }
`;
