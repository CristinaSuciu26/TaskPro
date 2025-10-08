import sprite from "../../assets/icons/sprite.svg";
import { LogoText, LogoWrapper } from "./LogoComponent.styled";

export default function LogoComponent() {
  return (
    <div>
      <LogoWrapper>
        <svg width="32" height="32">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <LogoText>Task Pro</LogoText>
      </LogoWrapper>
    </div>
  );
}
