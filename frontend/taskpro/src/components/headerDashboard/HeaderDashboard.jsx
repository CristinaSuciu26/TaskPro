import { Header } from "./HeaderDashboard.styled";

export default function HeaderDashboard({ boardName }) {
  return (
    <Header>
      <h1>{boardName}</h1>
      {/* <Filters /> */}
    </Header>
  );
}
