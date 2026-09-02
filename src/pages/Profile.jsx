import styled from "styled-components";
import { profile } from "../data/profile";
import { Share, Pen, Grid, Plus } from "lucide-react";

export default function Profile() {
  return (
    <Container>
      <Avatar>
        <div>
          <img src={profile?.avatarURL} alt="avatar" />
        </div>
        <button>
          <Plus size={25} />
        </button>
      </Avatar>
      <UserInfo>
        <p> {profile.name} </p>
        <p> {profile.tag} </p>
        <button> {profile.username} </button>
      </UserInfo>
      <Conntention>
        {profile.connectingInfo.map((item) => (
          <div key={item.id}>
            <p> {item.count.toLocaleString()} </p>
            <p> {item.text} </p>
          </div>
        ))}
      </Conntention>
      <ProfileOptions>
        <button>
          <Pen size={15} /> <span>Edit Profile</span>
        </button>
        <button>
          <Share size={15} /> <span>Share Profile</span>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100px;
    height: 100px;
  }
`;
const Avatar = styled.div`
  position: relative;
  align-self: stretch;
  justify-items: center;
  width: 100%;
  padding-top: 10px;
  div {
    width: fit-content;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    img {
      padding: 3px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  svg {
    position: absolute;
    bottom: 26px;
    right: 35%;
    background-color: var(--primary);
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p:first-child {
    font-size: 1.9rem;
    font-weight: 600;
  }
  button {
    color: var(--primary-container);
    padding: 5px;
    border-radius: 20px;
  }
`;
const Conntention = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p {
      font-weight: 500;
      font-size: 0.8rem;
    }
    p:first-child {
      weight: 600;
      font-size: 1.15rem;
      color: black;
    }
  }
`;
const ProfileOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    display: flex;
    jsutify-content: cneter;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
`;
const Posts = styled.div``;
const Post = styled.div``;
