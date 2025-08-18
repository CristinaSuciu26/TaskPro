import Filters from "../../components/Filters.jsx";
import HeaderDashboard from "../../components/HeaderDashboard.jsx";
import MainDashboard from "../../components/MainDashboard.jsx";

export default function ScreensPage() {
  return (
    <div>
      <h1>Screens page</h1>
      <HeaderDashboard />
      <Filters />
      <MainDashboard />
    </div>
  );
}
