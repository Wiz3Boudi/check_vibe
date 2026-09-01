import styled from "styled-components";
import { profile } from "../data/profile";
import { Share, Pen, Grid } from "lucide-react";

export default function Profile() {
  return (
    <Container>
      <Avatar>
        <div>
          <img src={profile?.avatarURL} alt="avatar" />
        </div>
      </Avatar>
      <UserInfo>
        <h2> {profile.name} </h2>
        <p> {profile.tag} </p>
        <button> {profile.username} </button>
      </UserInfo>
      <Conntention>
        {profile.connectingInfo.map((item) => (
          <div key={item.id}>
            <h2> {item.text} </h2>
            <h3> {item.count} </h3>
          </div>
        ))}
      </Conntention>
      <ProfileOptions>
        <button>
          <Pen /> <span>Edit Profile</span>
        </button>
        <button>
          <Share /> <span>Share Profile</span>
        </button>
      </ProfileOptions>
      <Posts>
        <div>
          <div>
            <Grid />
          </div>
          <div>
            <Grid />
          </div>
          <div>
            <Grid />
          </div>
        </div>
        <div>
          {profile.images.map((image, index) => (
            <img key={index} src={image} alt="post -  iamges" />
          ))}
        </div>
      </Posts>
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
const Post = styled.div``;
