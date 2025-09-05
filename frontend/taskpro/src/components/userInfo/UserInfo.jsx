import { useSelector } from "react-redux";
import { UserImg, UserInfoWrapper, UserName } from "./UserInfo.styled";
import NoPicture from "../../assets/images/no-profile-picture.png";
import ProfileEditModal from "../editProfileModal/ProfileEditModal";
import { useState } from "react";

export default function UserInfo() {
  const user = useSelector((state) => state.auth.user);
  console.log(user.image);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <UserInfoWrapper>
        <UserName>{user?.name}</UserName>
        <UserImg
          src={user?.image || NoPicture}
          alt={user?.name || "User"}
          onClick={() => setOpen(true)}
        />

        {open && (
          <ProfileEditModal user={user} onClose={() => setOpen(false)} />
        )}
      </UserInfoWrapper>
    </div>
  );
}
