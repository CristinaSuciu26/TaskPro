import LogoComponent from "../../components/logo/LogoComponent";
import sprite from "../../assets/icons/sprite.svg";
import { MenuIcon, SidebarContent, SidebarWrapper } from "./Sidebar.styled";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
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
      </SidebarContent>
    </div>
  );
}
