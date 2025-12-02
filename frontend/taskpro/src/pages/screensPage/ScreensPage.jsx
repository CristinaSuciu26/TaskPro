import { useState } from "react";
import HeaderDashboard from "../../components/headerDashboard/HeaderDashboard.jsx";
import MainDashboard from "../../components/mainDashboard/MainDashboard.jsx";
import {
  BoardButton,
  Paragraph,
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
    <>
      {selectedBoard ? (
        <ScreensPageContent
          style={{
            backgroundImage:
              selectedBoard?.background && selectedBoard.background !== "none"
                ? `url(${selectedBoard.background})`
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.3s ease-in-out",
          }}
        >
          <HeaderDashboard />
          <MainDashboard />
        </ScreensPageContent>
      ) : (
        <ScreensPageContent>
          <Paragraph>
            Before starting your project, it is essential&nbsp;
            <BoardButton onClick={() => setOpenModal(true)}>
              to create a board
            </BoardButton>
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </Paragraph>
        </ScreensPageContent>
      )}

      {openModal && (
        <CreateBoardModal
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </>
  );
}
