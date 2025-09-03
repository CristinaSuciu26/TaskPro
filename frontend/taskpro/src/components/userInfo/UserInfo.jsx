import { useSelector } from "react-redux";
import { UserImg, UserInfoWrapper, UserName } from "./UserInfo.styled";
import NoPicture from "../../assets/images/no-profile-picture.png";

export default function UserInfo() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <UserInfoWrapper>
        <UserName>{user?.name}</UserName>
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
