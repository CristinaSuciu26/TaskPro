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
  DeadlineTitle,
} from "./EditCardModal.styled";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCardsByColumn, updateCard } from "../../redux/card/cardThunks";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { useTheme } from "styled-components";
import dayjs from "dayjs";

export default function EditCardModal({ onClose, card }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [currentTitle, setCurrentTitle] = useState(card?.title || "");
  const [currentDescription, setCurrentDescription] = useState(
    card?.description || ""
  );
  const [deadline, setDeadline] = useState(
    card?.deadline ? dayjs(card.deadline) : null
  );
  const [priority, setPriority] = useState(card?.priority || "none");
  const columnId = card?.columnId;

  const updateCards = async (e) => {
    e.preventDefault();
    if (!currentTitle) {
      toast.error("Title is required");
      return;
    }

    const cardData = {
      title: currentTitle,
      description: currentDescription,
      deadline: deadline ? deadline.format("YYYY-MM-DD") : null,
      columnId,
      priority,
    };

    try {
      await dispatch(
        updateCard({
          id: card._id,
          updates: cardData,
        })
      ).unwrap();

      dispatch(getCardsByColumn(columnId));
      toast.success("Updated successfully!");
      onClose();
    } catch (error) {
      toast.error(error || "Update card failed");
    }
  };
  console.log(deadline);
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Edit Card</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>
        <FormWrapper>
          <Input
            type="text"
            placeholder="Title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />

          <LabelContainer>
            <LabelTitle>Label color</LabelTitle>
            <ColorWrapper>
              <InputButton
                type="radio"
                id="low"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <LabelColorLow htmlFor="low" color="labelLowPriority" />

              <InputButton
                type="radio"
                id="medium"
                name="priority"
                value="medium"
                checked={priority === "medium"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <LabelColorMedium htmlFor="medium" color="labelMediumPriority" />

              <InputButton
                type="radio"
                id="high"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <LabelColorHigh htmlFor="high" color="labelHighPriority" />

              <InputButton
                type="radio"
                id="without-priority"
                name="priority"
                value="none"
                checked={priority === "none"}
                onChange={(e) => setPriority(e.target.value)}
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
                value={deadline ? dayjs(deadline) : null}
                onChange={(newValue) => setDeadline(newValue)}
                format="DD/MM/YYYY"
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
                        backgroundColor: "white",
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
          <AddButton type="submit" onClick={updateCards}>
            <Icon>
              <FiPlus strokeWidth={1.5} />
            </Icon>
            Edit
          </AddButton>
        </FormWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
