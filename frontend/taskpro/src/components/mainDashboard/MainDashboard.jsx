import { useEffect, useMemo, useState } from "react";
import {
  AddButton,
  ButtonWrapper,
  ColumnContainer,
  ColumnWrapper,
  DashboardWrapper,
  IconsWrapper,
} from "./MainDashboard.styled";
import sprite from "../../assets/icons/sprite.svg";
import { FiPlus } from "react-icons/fi";
import AddColumnModal from "../addColumnModal/AddColumnModal";
import { useDispatch, useSelector } from "react-redux";
import { getColumnsByDashboard } from "../../redux/column/columnThunks";
import EditColumnModal from "../editColumn/EditColumnModal";

export default function MainDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const dispatch = useDispatch();
  const selectedDashboardId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const allColumns = useSelector((state) => state.column.columnsByDashboard);
  const columns = useMemo(() => {
    return allColumns?.[selectedDashboardId] ?? [];
  }, [allColumns, selectedDashboardId]);

  // 🔹 fetch columns when component mounts or dashboardId changes
  useEffect(() => {
    if (selectedDashboardId) {
      dispatch(getColumnsByDashboard(selectedDashboardId));
    }
  }, [dispatch, selectedDashboardId]);

  const handleEditModal = (col) => {
    setShowEditModal(true);
    setSelectedColumn(col);
    console.log("Editing column:", col);
  };
  console.log("Columns:", columns);

  return (
    <>
      {columns.map((col) => (
        <ColumnContainer key={col._id}>
          <ColumnWrapper>
            <h3>{col.title}</h3>
            <IconsWrapper>
              {" "}
              <svg width="24" height="24" onClick={() => handleEditModal(col)}>
                <use xlinkHref={`${sprite}#edit-icon`} />
              </svg>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#trash-icon`} />
              </svg>
            </IconsWrapper>
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
      {showEditModal && selectedColumn && (
        <EditColumnModal
          onClose={() => setShowEditModal(false)}
          column={selectedColumn}
        />
      )}
    </>
  );
}
