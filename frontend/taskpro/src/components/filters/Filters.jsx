import sprite from "../../assets/icons/sprite.svg";
import { FilterButton, FiltersWrapper, Icon } from "./Filter.styled.js";

export default function Filters() {
  return (
    <FiltersWrapper>
      <Icon>
        <svg width="24" height="14">
          <use xlinkHref={`${sprite}#filter-icon`} />
        </svg>
      </Icon>
      <FilterButton>Filters</FilterButton>
    </FiltersWrapper>
  );
}
