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
  LogoutButton,
  BoardWrapper,
  NoBoards,
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
import { HelpModal } from "../../components/helpModal/HelpModal";
import { logout } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { setSelectedDashboardId } from "../../redux/dashboard/dashboardSlice";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dashboards = useSelector((state) => state.dashboard.dashboards);
  const selectedId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1240) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open && window.innerWidth < 1240) {
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/welcome");
  };

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

  const handleHelpModal = () => {
    setOpenHelpModal(true);
  };
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
          <svg width="197" height="10">
            <use xlinkHref={`${sprite}#icon-line`} />
          </svg>
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
        {dashboards.length === 0 ? (
          <DashboardListWrapper>
            <DashboardList>
              <NoBoards>
                You don’t have any boards yet — create one to get started! Your
                boards will show up here once you create them.
              </NoBoards>
            </DashboardList>
          </DashboardListWrapper>
        ) : (
          <DashboardListWrapper>
            <DashboardList>
              {dashboards?.map((board) => (
                <DashboardListItems
                  key={`${board._id}-${board.icon}`}
                  onClick={() => dispatch(setSelectedDashboardId(board._id))}
                >
                  <BoardWrapper selected={selectedId === board._id}>
                    <svg width="19" height="18">
                      <use xlinkHref={`${sprite}#${board.icon}`} />
                    </svg>
                    <Title>{board.title}</Title>
                    <IconContainer>
                      <Icon
                        width="16"
                        height="16"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditModal(board);
                        }}
                      >
                        <use xlinkHref={`${sprite}#edit-icon`} />
                      </Icon>

                      <Icon
                        width="16"
                        height="16"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(board._id);
                        }}
                      >
                        <use xlinkHref={`${sprite}#trash-icon`} />
                      </Icon>
                    </IconContainer>
                  </BoardWrapper>
                </DashboardListItems>
              ))}
            </DashboardList>
          </DashboardListWrapper>
        )}

        <NeedHelp>
          <NeedHelpWrapper>
            <NeedHelpImg src={needHelpImg} alt="need help" />
            <NeedHelpParagraph>
              If you need help with <NeedHelpSpan>TaskPro</NeedHelpSpan>, check
              out our support resources or reach out to our customer support
              team.
              <NeedHelpButton onClick={handleHelpModal}>
                <Icon width="19" height="19">
                  <use xlinkHref={`${sprite}#icon-help`} />
                </Icon>
                Need help?
              </NeedHelpButton>
            </NeedHelpParagraph>
          </NeedHelpWrapper>
        </NeedHelp>

        <LogoutButton onClick={handleLogout}>
          <Icon width="28" height="28">
            <use xlinkHref={`${sprite}#logout-icon`} />
          </Icon>
          Log out
        </LogoutButton>
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

      {openHelpModal && <HelpModal onClose={() => setOpenHelpModal(false)} />}
    </div>
  );
}
