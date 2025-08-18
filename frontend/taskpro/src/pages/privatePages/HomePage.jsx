import Header from "../../layouts/Header.jsx";
import Sidebar from "../../layouts/Sidebar.jsx";
import ScreensPage from "./ScreensPage.jsx";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Header />
      <Sidebar />
      <ScreensPage/>
    </div>
  );
}
