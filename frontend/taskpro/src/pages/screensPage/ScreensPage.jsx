import { useState } from "react";
import HeaderDashboard from "../../components/headerDashboard/HeaderDashboard.jsx";
import MainDashboard from "../../components/MainDashboard.jsx";
import {
  BoardButton,
  Paragraph,
  ParagraphWrapper,
  ScreensPageContent,
} from "./ScreensPage.styled.js";
import CreateBoardModal from "../../components/createBoard/CreateBoardModal.jsx";
import { useSelector } from "react-redux";

export default function ScreensPage() {
  const [openModal, setOpenModal] = useState(false);
  const selectedId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const selectedBoard = useSelector((state) =>
    state.dashboard.dashboards.find((b) => b._id === selectedId)
  );

  return (
    <ScreensPageContent>
      {selectedBoard ? (
        <HeaderDashboard />
      ) : (
        <ParagraphWrapper>
          <Paragraph>
            Before starting your project, it is essential{" "}
            <BoardButton onClick={() => setOpenModal(true)}>
              to create a board
            </BoardButton>
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </Paragraph>
        </ParagraphWrapper>
      )}


      <MainDashboard />
      {openModal && (
        <CreateBoardModal
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </ScreensPageContent>
  );
}
