import LogoComponent from "../../components/logo/LogoComponent";
import sprite from "../../assets/icons/sprite.svg";
import {
  ButtonWrapper,
  CreateBoardBtn,
  CreateBoardWrapper,
  MenuIcon,
  MyBoardsTitle,
  SidebarContent,
  SidebarWrapper,
} from "./Sidebar.styled";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import CreateBoardModal from "../../components/createBoard/CreateBoardModal";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <MenuIcon onClick={() => setOpen(true)}>
        <svg width="24" height="24">
          <use xlinkHref={`${sprite}#icon-menu`} />
        </svg>
      </MenuIcon>

      {open && <SidebarWrapper onClick={() => setOpen(false)} />}
      <SidebarContent open={open} onClick={(e) => e.stopPropagation()}>
        <LogoComponent />
        <CreateBoardWrapper>
          <MyBoardsTitle> My boards</MyBoardsTitle>

          <svg width="197" height="24">
            <use xlinkHref={`${sprite}#icon-line`} />
          </svg>
          <ButtonWrapper>
            Create a new board
            <CreateBoardBtn onClick={handleModal}>
              <FiPlus size={14} />
            </CreateBoardBtn>
          </ButtonWrapper>
          <svg width="197" height="24">
            <use xlinkHref={`${sprite}#icon-line`} />
          </svg>
        </CreateBoardWrapper>
      </SidebarContent>
      {openModal && (
        <CreateBoardModal
          onClose={() => {
            setOpenModal(false);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
