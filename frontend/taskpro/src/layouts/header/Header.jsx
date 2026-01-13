import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTheme } from "../../redux/theme/themeThunks.js";
import {
  ContentWrapper,
  HeaderWrapper,
  ThemeButton,
  ThemeList,
  ThemeListItem,
} from "./Header.styled.js";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import UserInfo from "../../components/userInfo/UserInfo.jsx";

export default function ThemeDropdown() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleThemeChange = (newTheme) => {
    dispatch(updateTheme(newTheme));
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef}>
      <HeaderWrapper>
        <ContentWrapper>
          <ThemeButton
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            Theme {open ? <FaChevronUp /> : <FaChevronDown />}
          </ThemeButton>

          {open && (
            <ThemeList>
              <ThemeListItem onClick={() => handleThemeChange("light")}>
                Light
              </ThemeListItem>
              <ThemeListItem onClick={() => handleThemeChange("dark")}>
                Dark
              </ThemeListItem>
              <ThemeListItem onClick={() => handleThemeChange("violet")}>
                Violet
              </ThemeListItem>
            </ThemeList>
          )}
        </ContentWrapper>
        <UserInfo />
      </HeaderWrapper>
    </div>
  );
}
