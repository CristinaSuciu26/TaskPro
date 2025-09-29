import Header from "../../../layouts/header/Header.jsx";
import Sidebar from "../../../layouts/sidebar/Sidebar.jsx";
import ScreensPage from "../../screensPage/ScreensPage.jsx";

export default function HomePage() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Header />
      <Sidebar />
      <ScreensPage />
    </div>
  );
}
