import styled from "styled-components";
import { profile } from "../data/profile";

export default function Profile() {
  return (
    <Container>
      <Avatar>
        <div>
          <img src={profile?.avatarURL} alt="avatar" />
        </div>
      </Avatar>
      <UserInfo></UserInfo>
      <Conntention></Conntention>
      <ProfileOptions></ProfileOptions>
      <Posts></Posts>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
const Avatar = styled.div``;
const UserInfo = styled.div``;
const Conntention = styled.div``;
const ProfileOptions = styled.div``;
const Posts = styled.div``;
