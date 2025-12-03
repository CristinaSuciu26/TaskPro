import {
  ModalContent,
  ModalOverlay,
  CloseButton,
  FormWrapper,
  AddButton,
  ModalTitle,
  Input,
  Icon,
} from "./AddColumnModal.styled";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createColumn } from "../../redux/column/columnThunks";
import { useState } from "react";

export default function AddColumnModal({ onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const selectedDashboardId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );

  const createColumns = async (e) => {
    e.preventDefault();
    const columnData = { title, dashboardId: selectedDashboardId };
    if (!title) {
      toast.error("Title is required");
      return;
    }
    try {
      await dispatch(createColumn(columnData));

      toast.success("Created successfully!");
      onClose();
    } catch (error) {
      toast.error(error || "Create column failed");
    }
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Add column</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>
        <FormWrapper>
          <Input
            type="text"
            name="name"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AddButton type="submit" onClick={createColumns}>
            <Icon>
              <FiPlus strokeWidth={1.5} />
            </Icon>
            Add
          </AddButton>
        </FormWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
