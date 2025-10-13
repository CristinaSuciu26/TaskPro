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
import { useDispatch } from "react-redux";
import { createColumn } from "../../redux/column/columnThunks";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function AddColumnModal({ onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { dashboardId } = useParams();

  const createColumns = async () => {
    const columnData = { title, dashboardId };
    if (!title) {
      toast.error("Title is required");
      return;
    }
    try {
      await dispatch(createColumn(columnData));

      toast.success("Created successfully!");
    } catch (error) {
      toast.error(error || "Create column failed");
    }
  };
  return (
    <ModalOverlay>
      <ModalContent>
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
