import sprite from "../../assets/icons/sprite.svg";
import { LogoText, LogoWrapper } from "./LogoComponent.styled";

export default function LogoComponent() {
  return (
    <div>
      <LogoWrapper>
        <svg width="24" height="24">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <LogoText>Task Pro</LogoText>
      </LogoWrapper>
    </div>
  );
}
