import { useState } from "react";
import Filters from "../../components/Filters.jsx";
import HeaderDashboard from "../../components/headerDashboard/HeaderDashboard.jsx";
import MainDashboard from "../../components/MainDashboard.jsx";
import {
  BoardButton,
  Paragraph,
  ParagraphWrapper,
  ScreensPageContent,
} from "./ScreensPage.styled.js";
import CreateBoardModal from "../../components/createBoard/CreateBoardModal.jsx";

export default function ScreensPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ScreensPageContent>
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

      <HeaderDashboard />
      <Filters />
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
