import { useDispatch, useSelector } from "react-redux";
import {
  ColumnListWrapper,
  ColumnNameWrapper,
  ColumnTitle,
  ModalContent,
  ModalOverlay,
} from "./ColumnListModal.styled";
import { useMemo } from "react";
import sprite from "../../assets/icons/sprite.svg";
import { getCardsByColumn, updateCard } from "../../redux/card/cardThunks";

export function ColumnListModal({ card, onClose }) {
  const dispatch = useDispatch();

  const allColumns = useSelector(
    (state) => state.column.columnsByDashboard || {}
  );
  const selectedDashboardId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );

  const columns = useMemo(
    () => allColumns?.[selectedDashboardId] ?? [],
    [allColumns, selectedDashboardId]
  );

  const moveCard = async (columnId) => {
    if (card.columnId === columnId) return onClose();

    const oldColumnId = card.columnId;

    await dispatch(
      updateCard({
        id: card._id,
        updates: { columnId },
      })
    );
    dispatch(getCardsByColumn(oldColumnId));
    dispatch(getCardsByColumn(columnId));
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ColumnListWrapper>
          {columns.map((col) => (
            <ColumnNameWrapper
              key={col._id}
              isCurrent={col._id === card.columnId}
            >
              <ColumnTitle>{col.title}</ColumnTitle>
              <svg
                width="24"
                height="24"
                style={{ cursor: "pointer" }}
                onClick={() => moveCard(col._id)}
              >
                <use xlinkHref={`${sprite}#status-icon`} />
              </svg>
            </ColumnNameWrapper>
          ))}
        </ColumnListWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
