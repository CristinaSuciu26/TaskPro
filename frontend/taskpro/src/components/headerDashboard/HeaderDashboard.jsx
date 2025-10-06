import { SelectedBoard } from "./HeaderDashboard.styled";
import Filters from "../filters/Filters.jsx";
import { useSelector } from "react-redux";

export default function HeaderDashboard() {
  const selectedId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const selectedBoard = useSelector((state) =>
    state.dashboard.dashboards.find((b) => b._id === selectedId)
  );

  return (
    <SelectedBoard>
      <span>{selectedBoard?.title || "Niciun board"}</span>
      <Filters />
    </SelectedBoard>
  );
}
