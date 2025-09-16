import { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  CloseButton,
  Form,
  InputTitle,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  IconWrapper,
  IconTitle,
  Icon,
  StyledLabel,
} from "./CreateBoardModal.styled";
import sprite from "../../assets/icons/sprite.svg";

export default function CreateBoardModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("icon-1"); // default first icon
  //   const [background, setBackground] = useState("none"); // default "no background"
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    // Build request payload
    // const newBoard = {
    //   title,
    //   icon,
    //   //   background,
    // };

    // TODO: send request to server
    // await api.createBoard(newBoard);

    // Reset & close modal
    setError("");
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>New board</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <InputTitle
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <IconTitle>Icons</IconTitle>
          <IconWrapper>
            <StyledLabel selected={icon === "icon-1"}>
              <input
                type="radio"
                name="icons"
                value="icon-1"
                checked={icon === "icon-1"}
                onChange={() => setIcon("icon-1")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon1`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-2"}>
              <input
                type="radio"
                name="icons"
                value="icon-2"
                checked={icon === "icon-2"}
                onChange={() => setIcon("icon-2")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon2`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-3"}>
              <input
                type="radio"
                name="icons"
                value="icon-3"
                checked={icon === "icon-3"}
                onChange={() => setIcon("icon-3")}
                style={{ display: "none" }}
              />
              <Icon>
                {" "}
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon3`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-4"}>
              <input
                type="radio"
                name="icons"
                value="icon-4"
                checked={icon === "icon-4"}
                onChange={() => setIcon("icon-4")}
                style={{ display: "none" }}
              />
              <Icon>
                {" "}
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon4`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-5"}>
              <input
                type="radio"
                name="icons"
                value="icon-5"
                checked={icon === "icon-5"}
                onChange={() => setIcon("icon-5")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon5`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-6"}>
              <input
                type="radio"
                name="icons"
                value="icon-6"
                checked={icon === "icon-6"}
                onChange={() => setIcon("icon-6")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon6`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-7"}>
              <input
                type="radio"
                name="icons"
                value="icon-7"
                checked={icon === "icon-7"}
                onChange={() => setIcon("icon-7")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon7`} />
                </svg>
              </Icon>
            </StyledLabel>
            <StyledLabel selected={icon === "icon-8"}>
              <input
                type="radio"
                name="icons"
                value="icon-8"
                checked={icon === "icon-8"}
                onChange={() => setIcon("icon-8")}
                style={{ display: "none" }}
              />
              <Icon>
                <svg width="197" height="24">
                  <use xlinkHref={`${sprite}#icon8`} />
                </svg>
              </Icon>
            </StyledLabel>
          </IconWrapper>

          {/* Backgrounds */}
          {/* <div>
            <p>Select a background:</p>
            <label>
              <input
                type="radio"
                name="background"
                value="none"
                checked={background === "none"}
                onChange={() => setBackground("none")}
              />
              No background
            </label>
            {["bg-1", "bg-2", "bg-3"].map((bg) => (
              <label key={bg}>
                <input
                  type="radio"
                  name="background"
                  value={bg}
                  checked={background === bg}
                  onChange={() => setBackground(bg)}
                />
                <svg width="24" height="24">
                  <use xlinkHref={`${sprite}#${bg}`} />
                </svg>
              </label>
            ))}
          </div> */}

          <button type="submit">Create</button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
