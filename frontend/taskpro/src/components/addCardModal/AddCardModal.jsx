import {
  ModalContent,
  ModalOverlay,
  CloseButton,
  FormWrapper,
  AddButton,
  ModalTitle,
  Input,
  Icon,
  Textarea,
  LabelContainer,
  ColorWrapper,
  LabelTitle,
  InputButton,
  LabelColorLow,
  LabelColorMedium,
  LabelColorHigh,
  LabelColorWithoutPriority,
  DeadlineContainer,
  StyledDateInput,
  DeadlineTitle,
} from "./AddCardModal.styled";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createCard, getCardsByColumn } from "../../redux/card/cardThunks";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { useTheme } from "styled-components";

export default function AddCardModal({ onClose, columnId }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);
  const cardsInColumn = useSelector(
    (state) => state.card.cardsByColumn[columnId] || []
  );
  const theme = useTheme();
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
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>

          <LabelContainer>
            <LabelTitle>Label color</LabelTitle>
            <ColorWrapper>
              <InputButton type="radio" id="low" name="priority" value="low" />
              <LabelColorLow htmlFor="low" color="labelLowPriority" />

              <InputButton
                type="radio"
                id="medium"
                name="priority"
                value="medium"
              />
              <LabelColorMedium htmlFor="medium" color="labelMediumPriority" />

              <InputButton
                type="radio"
                id="high"
                name="priority"
                value="high"
              />
              <LabelColorHigh htmlFor="high" color="labelHighPriority" />

              <InputButton
                type="radio"
                id="without-priority"
                name="priority"
                value="none"
              />
              <LabelColorWithoutPriority
                htmlFor="without-priority"
                color="labelWithoutPriority"
              />
            </ColorWrapper>
          </LabelContainer>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DeadlineContainer>
              <DeadlineTitle>Deadline</DeadlineTitle>
              <DatePicker
                value={deadline}
                onChange={(newValue) => setDeadline(newValue)}
                enableAccessibleFieldDOMStructure={false}
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    sx: {
                      width: 287,
                      marginLeft: 5,
                      mt: 1,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: theme.background,
                        color: theme.text,
                        "&:hover fieldset": {
                          borderColor: theme.accent,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.accent,
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: theme.text,
                        padding: "9px",
                      },
                    },
                  },
                  popper: {
                    sx: {
                      "& .MuiPaper-root": {
                        marginRight: 65,
                        backgroundColor: theme.background,
                        color: theme.text,
                        borderRadius: 2,
                        borderColor: theme.accent,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      },
                    },
                  },
                  day: {
                    sx: {
                      "&.Mui-selected": {
                        backgroundColor: theme.background,
                        color: theme.text,
                      },
                      "&:hover": {
                        backgroundColor: theme.accent,
                      },
                    },
                  },
                  toolbar: {
                    sx: {
                      backgroundColor: theme.backgroundSecondary,
                      color: theme.text,
                    },
                  },
                }}
              />
            </DeadlineContainer>
          </LocalizationProvider>
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
