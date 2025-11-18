import { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import { FilterButton, FiltersWrapper, Icon } from "./Filter.styled.js";
import FiltersModal from "../filterModal/FiltersModal.jsx";
import { setPriorityFilter } from "../../redux/card/cardSlice.js";
import { useDispatch } from "react-redux";
export default function Filters() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <FiltersWrapper onClick={() => setOpenModal(true)}>
        <Icon>
          <svg width="24" height="14">
            <use xlinkHref={`${sprite}#filter-icon`} />
          </svg>
        </Icon>
        <FilterButton>Filters</FilterButton>
      </FiltersWrapper>

      {openModal && (
        <FiltersModal
          onClose={(selectedPriority) => {
            setOpenModal(false);

            if (selectedPriority) {
              dispatch(setPriorityFilter(selectedPriority));
            }
          }}
        />
      )}
    </>
  );
}