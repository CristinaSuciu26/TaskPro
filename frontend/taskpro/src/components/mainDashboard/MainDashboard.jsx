import { useState } from "react";
import {
  AddButton,
  ButtonWrapper,
  DashboardWrapper,
} from "./MainDashboard.styled";
import { FiPlus } from "react-icons/fi";

export default function MainDashboard() {
  return (
    <DashboardWrapper>
      <ButtonWrapper>
        <AddButton>
          <FiPlus strokeWidth={1.5} />
        </AddButton>

        <span>Add another column</span>
      </ButtonWrapper>
    </DashboardWrapper>
  );
}
