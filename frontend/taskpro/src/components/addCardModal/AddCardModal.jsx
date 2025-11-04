import {
  ModalContent,
  ModalOverlay,
  CloseButton,
  FormWrapper,
  AddButton,
  ModalTitle,
  Input,
  Icon,
} from "./AddCardModal.styled";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createCard, getCardsByColumn } from "../../redux/card/cardThunks";

export default function AddCardModal({ onClose, columnId }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const cardsInColumn = useSelector(
    (state) => state.card.cardsByColumn[columnId] || []
  );

  const createCards = async (e) => {
    e.preventDefault();
    if (!title) {
      toast.error("Title is required");
      return;
    }

    const cardData = {
      title,
      description,
      columnId,
      order: cardsInColumn.length, // adaugă la final
    };

    try {
      await await dispatch(createCard(cardData)).unwrap();
      dispatch(getCardsByColumn(columnId));
      toast.success("Created successfully!");
      onClose();
    } catch (error) {
      toast.error(error || "Create card failed");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Add Card</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>
        <FormWrapper>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AddButton type="submit" onClick={createCards}>
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
