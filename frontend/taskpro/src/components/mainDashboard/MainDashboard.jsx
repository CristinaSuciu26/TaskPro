import { useState } from "react";
import {
  AddButton,
  ButtonWrapper,
  DashboardWrapper,
} from "./MainDashboard.styled";
import { FiPlus } from "react-icons/fi";
import AddColumnModal from "../addColumnModal/AddColumnModal";

export default function MainDashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DashboardWrapper onClick={() => setShowModal(true)}>
        <ButtonWrapper>
          <AddButton>
            <FiPlus strokeWidth={1.5} />
          </AddButton>

          <span>Add another column</span>
        </ButtonWrapper>
      </DashboardWrapper>
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
