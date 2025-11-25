import {
  ModalContent,
  ModalOverlay,
  CloseButton,
  FormWrapper,
  AddButton,
  ModalTitle,
  Input,
  Icon,
} from "./EditColumnModal.styled";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateColumn } from "../../redux/column/columnThunks";
import { useState } from "react";

export default function EditColumnModal({ onClose, column }) {
  const dispatch = useDispatch();
  const [currentTitle, setCurrentTitle] = useState(column?.title || "");

  const updateColumns = async (e) => {
    e.preventDefault();
    const columnData = {
      id: column._id,
      title: currentTitle,
    };
    if (!currentTitle) {
      toast.error("Title is required");
      return;
    }
    try {
      await dispatch(updateColumn(columnData)).unwrap();

      toast.success("Edited successfully!");
      onClose();
    } catch (error) {
      toast.error(error || "Edit column failed");
    }
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ModalTitle>Edit column</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>
        <FormWrapper>
          <Input
            type="text"
            name="name"
            placeholder="Title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
          <AddButton type="submit" onClick={updateColumns}>
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
