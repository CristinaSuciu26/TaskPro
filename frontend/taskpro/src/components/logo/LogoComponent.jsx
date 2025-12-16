import { useDispatch } from "react-redux";
import sprite from "../../assets/icons/sprite.svg";
import { LogoText, LogoWrapper } from "./LogoComponent.styled";
import { useNavigate } from "react-router-dom";
import { resetSelectedBoard } from "../../redux/dashboard/dashboardSlice";

export default function LogoComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNav = () => {
    dispatch(resetSelectedBoard());
    navigate(`/home/`);
  };
  return (
    <div>
      <LogoWrapper onClick={handleNav}>
        <svg width="32" height="32">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <LogoText>Task Pro</LogoText>
      </LogoWrapper>
    </div>
  );
}
