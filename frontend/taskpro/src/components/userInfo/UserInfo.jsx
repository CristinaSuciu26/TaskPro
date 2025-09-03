import { useSelector } from "react-redux";
import { UserImg, UserInfoWrapper } from "./UserInfo.styled";
import NoPicture from "../../assets/images/no-profile-picture.png";

export default function UserInfo() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <UserInfoWrapper>
        <span>{user?.name}</span>
        <UserImg
          src={user?.avatarURL || NoPicture}
          alt={user?.name || "User"}

          // onClick={() => setOpen(true)}
        />

        {/* {open && <UserModal user={user} onClose={() => setOpen(false)} />} */}
      </UserInfoWrapper>
    </div>
  );
}
