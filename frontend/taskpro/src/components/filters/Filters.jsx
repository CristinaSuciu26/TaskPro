import sprite from "../../assets/icons/sprite.svg";
import { ButtonWrapper, FilterButton, Icon } from "./Filter.styled.js";

export default function Filters() {
  return (
    <Icon>
      <ButtonWrapper>
        <FilterButton>Filters</FilterButton>
      </ButtonWrapper>
      <svg width="34" height="34">
        <use xlinkHref={`${sprite}#filter-icon`} />
      </svg>
    </Icon>
  );
}
