import { useEffect, useState } from "react";
import {
  AddButton,
  ButtonWrapper,
  ColumnContainer,
  ColumnWrapper,
  DashboardWrapper,
} from "./MainDashboard.styled";
import { FiPlus } from "react-icons/fi";
import AddColumnModal from "../addColumnModal/AddColumnModal";
import { useDispatch, useSelector } from "react-redux";
import { getColumnsByDashboard } from "../../redux/column/columnThunks";

export default function MainDashboard() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const selectedDashboardId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const columns = useSelector(
    (state) => state.column.columnsByDashboard?.[selectedDashboardId] || []
  );
  console.log({
    selectedDashboardId,
    storeColumns: columns,
  });
  // 🔹 fetch columns when component mounts or dashboardId changes
  useEffect(() => {
    if (selectedDashboardId) {
      dispatch(getColumnsByDashboard(selectedDashboardId));
    }
  }, [dispatch, selectedDashboardId]);

  return (
    <>
      {columns.map((col) => (
        <ColumnContainer>
          <ColumnWrapper key={col._id}>
            <h3>{col.title}</h3>
          </ColumnWrapper>
          {/* <ButtonWrapper>
            <AddButton>
              <FiPlus strokeWidth={1.5} />
            </AddButton>

            <span>Add another card</span>
          </ButtonWrapper> */}
        </ColumnContainer>
      ))}
      <ColumnContainer>
        <DashboardWrapper onClick={() => setShowModal(true)}>
          <ButtonWrapper>
            <AddButton>
              <FiPlus strokeWidth={1.5} />
            </AddButton>

            <span>Add another column</span>
          </ButtonWrapper>
        </DashboardWrapper>
      </ColumnContainer>
      {showModal && (
        <AddColumnModal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}
