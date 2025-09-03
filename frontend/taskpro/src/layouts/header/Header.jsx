import { useState } from "react";
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

  const handleThemeChange = (newTheme) => {
    dispatch(updateTheme(newTheme));
    setOpen(false);
  };

  return (
    <div>
      <HeaderWrapper>
        <ContentWrapper>
          <ThemeButton onClick={() => setOpen(!open)}>
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
