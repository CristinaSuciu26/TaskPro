import { useState } from "react";
import { FiX, FiPlus } from "react-icons/fi";
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
  BackgroundTitle,
  BackgroundWrapper,
  Image,
  ButtonWraper,
  CreateButton,
} from "./CreateBoardModal.styled";
import sprite from "../../assets/icons/sprite.svg";
import bg1 from "../../assets/images/wallpaper1.png";
import bg2 from "../../assets/images/wallpaper2.png";
import bg3 from "../../assets/images/wallpaper3.png";
import bg4 from "../../assets/images/wallpaper4.png";
import bg5 from "../../assets/images/wallpaper5.png";
import bg6 from "../../assets/images/wallpaper6.png";
import bg7 from "../../assets/images/wallpaper7.png";
import bg8 from "../../assets/images/wallpaper8.png";
import bg9 from "../../assets/images/wallpaper9.png";
import bg10 from "../../assets/images/wallpaper10.png";
import bg11 from "../../assets/images/wallpaper11.png";
import bg12 from "../../assets/images/wallpaper12.png";
import bg13 from "../../assets/images/wallpaper13.png";
import bg14 from "../../assets/images/wallpaper14.png";
import bg15 from "../../assets/images/wallpaper15.png";
import noBg from "../../assets/images/no-wallpaper.png";
import { toast } from "react-toastify";

export default function CreateBoardModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("icon-1");
  const [background, setBackground] = useState("none");
  const [error, setError] = useState("");

  const backgrounds = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
    bg7,
    bg8,
    bg9,
    bg10,
    bg11,
    bg12,
    bg13,
    bg14,
    bg15,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
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
          <BackgroundTitle>Background</BackgroundTitle>
          <BackgroundWrapper>
            <label>
              <input
                type="radio"
                name="background"
                value="none"
                checked={background === "none"}
                style={{ display: "none" }}
                onChange={() => setBackground("none")}
              />
              <Image src={noBg} alt={`no background`} width="50" height="50" />
            </label>
            {backgrounds.map((bg, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="background"
                  value={bg}
                  checked={background === bg}
                  style={{ display: "none" }}
                  onChange={() => setBackground(bg)}
                />
                <Image
                  selected={background === bg}
                  src={bg}
                  alt={`background-${idx}`}
                  width="50"
                  height="50"
                />
              </label>
            ))}
          </BackgroundWrapper>
          <ButtonWraper>
            <CreateButton type="submit">
              <FiPlus strokeWidth={1.5} />
            </CreateButton>
            Create
          </ButtonWraper>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
