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
  IconWrapper,
  DashboardListWrapper,
  DashboardList,
  DashboardListItems,
  IconContainer,
  Icon,
  Title,
  NeedHelp,
  ButtonText,
  NeedHelpImg,
  NeedHelpParagraph,
  NeedHelpButton,
  NeedHelpWrapper,
  NeedHelpSpan,
} from "./Sidebar.styled";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import CreateBoardModal from "../../components/createBoard/CreateBoardModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDashboard,
  fetchDashboards,
} from "../../redux/dashboard/dashboardThunks";
import EditBoardModal from "../../components/editBoard/EditBoardModal";
import needHelpImg from "../../assets/images/needhelp.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dashboards = useSelector((state) => state.dashboard.dashboards);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);
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

  useEffect(() => {
    if (!dashboards || dashboards.length === 0) {
      dispatch(fetchDashboards());
    }
  }, [dispatch, dashboards]);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await dispatch(deleteDashboard(id)).unwrap();
        toast.success("Dashboard deleted!");
      } catch (err) {
        toast.error(err || "Delete failed");
      }
    },
    [dispatch]
  );

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleEditModal = useCallback((board) => {
    setSelectedBoard(board);
    setOpenEditModal(true);
  }, []);

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
          <IconWrapper>
            <svg width="197" height="10">
              <use xlinkHref={`${sprite}#icon-line`} />
            </svg>
          </IconWrapper>

          <ButtonWrapper>
            <ButtonText> Create a new board</ButtonText>

            <CreateBoardBtn onClick={handleModal}>
              <FiPlus size={14} />
            </CreateBoardBtn>
          </ButtonWrapper>
          <svg width="197" height="24">
            <use xlinkHref={`${sprite}#icon-line`} />
          </svg>
        </CreateBoardWrapper>
        <DashboardListWrapper>
          <DashboardList>
            {dashboards?.map((board) => (
              <DashboardListItems key={`${board._id}-${board.icon}`}>
                <svg width="19" height="18">
                  <use xlinkHref={`${sprite}#${board.icon}`} />
                </svg>
                <Title>{board.title}</Title>
                <IconContainer>
                  <Icon
                    width="16"
                    height="16"
                    onClick={() => handleEditModal(board)}
                  >
                    <use xlinkHref={`${sprite}#edit-icon`} />
                  </Icon>

                  <Icon
                    width="16"
                    height="16"
                    onClick={() => handleDelete(board._id)}
                  >
                    <use xlinkHref={`${sprite}#trash-icon`} />
                  </Icon>
                </IconContainer>
              </DashboardListItems>
            ))}
          </DashboardList>
        </DashboardListWrapper>

        <NeedHelp>
          <NeedHelpWrapper>
            <NeedHelpImg src={needHelpImg} alt="need help" />
            <NeedHelpParagraph>
              If you need help with <NeedHelpSpan>TaskPro</NeedHelpSpan>, check
              out our support resources or reach out to our customer support
              team.
              <NeedHelpButton>
                <Icon width="19" height="19">
                  <use xlinkHref={`${sprite}#icon-help`} />
                </Icon>
                Need help?
              </NeedHelpButton>
            </NeedHelpParagraph>
          </NeedHelpWrapper>
        </NeedHelp>
      </SidebarContent>
      {openModal && (
        <CreateBoardModal
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
      {openEditModal && selectedBoard && (
        <EditBoardModal
          onClose={() => setOpenEditModal(false)}
          board={selectedBoard}
        />
      )}
    </div>
  );
}
