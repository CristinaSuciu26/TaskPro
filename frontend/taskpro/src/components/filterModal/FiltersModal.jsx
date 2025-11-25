import {
  ButtonWrapper,
  CloseButton,
  ColorWrapper,
  FormWrapper,
  InputButton,
  LabelColorHigh,
  LabelColorLow,
  LabelColorMedium,
  LabelColorWithoutPriority,
  LabelContainer,
  LabelTitle,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  PriorityName,
  ShowAll,
} from "./FiltersModal.syled";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function FiltersModal({ onClose }) {
  const [priority, setPriority] = useState("all");

  const handlePriority = (value) => {
    setPriority(value);
    onClose(value);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <CloseButton onClick={() => onClose(priority)}>
          <FiX strokeWidth={1.5} />
        </CloseButton>

        <ModalTitle>Filters</ModalTitle>

        <svg width="252" height="14">
          <use xlinkHref={`${sprite}#icon-line`} />
        </svg>

        <FormWrapper>
          <LabelContainer>
            <ButtonWrapper>
              {" "}
              <LabelTitle>Label color</LabelTitle>
              <ShowAll onClick={() => handlePriority("all")}>Show All</ShowAll>
            </ButtonWrapper>

            <ColorWrapper>
              <InputButton
                type="radio"
                id="low"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={() => handlePriority("low")}
              />
              <LabelColorLow htmlFor="low">
                <PriorityName>Low</PriorityName>
              </LabelColorLow>

              <InputButton
                type="radio"
                id="medium"
                name="priority"
                value="medium"
                checked={priority === "medium"}
                onChange={() => handlePriority("medium")}
              />
              <LabelColorMedium htmlFor="medium">
                <PriorityName>Medium</PriorityName>
              </LabelColorMedium>

              <InputButton
                type="radio"
                id="high"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={() => handlePriority("high")}
              />
              <LabelColorHigh htmlFor="high">
                <PriorityName>High</PriorityName>
              </LabelColorHigh>

              <InputButton
                type="radio"
                id="without-priority"
                name="priority"
                value="none"
                checked={priority === "none"}
                onChange={() => handlePriority("none")}
              />
              <LabelColorWithoutPriority htmlFor="without-priority">
                <PriorityName>Without priority</PriorityName>
              </LabelColorWithoutPriority>
            </ColorWrapper>
          </LabelContainer>
        </FormWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
