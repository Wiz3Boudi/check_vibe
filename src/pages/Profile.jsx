import styled from "styled-components";
import { profile } from "../data/profile";
import { Share, Pen, Plus, Grid3X3, Film, Bookmark } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const Icons = [
    { id: "grid", icon: Grid3X3 },
    { id: "film", icon: Film },
    { id: "bookmark", icon: Bookmark },
  ];
  const [category, setCategory] = useState("grid");

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
          <Pen size={20} /> <span>Edit Profile</span>
        </button>
        <button>
          <Share size={20} /> <span>Share Profile</span>
        </button>
      </ProfileOptions>
      <Posts>
        <div className="categories">
          {Icons?.map((Item) => {
            return (
              <button
                key={Item.id}
                className={Item.id === category ? "active" : ""}
                onClick={() => setCategory(Item.id)}
              >
                {<Item.icon />}
              </button>
            );
          })}
        </div>
        <div className="images">
          {category === "grid" &&
            profile.images.map((img, index) => {
              return (
                <Post key={index}>
                  <img src={img} alt={img} />
                </Post>
              );
            })}
          {category === "film" &&
            profile.images
              .slice(4, profile.images.length - 1)
              .map((img, index) => {
                return (
                  <Post key={index}>
                    <img src={img} alt={img} />
                  </Post>
                );
              })}
          {category === "bookmark" &&
            profile.images.slice(1, 3).map((img, index) => {
              return (
                <Post key={index}>
                  <img src={img} alt={img} />
                </Post>
              );
            })}
        </div>
      </Posts>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
  p {
    color: var(--text-muted);
  }
  p:first-child {
    font-size: 1.9rem;
    font-weight: 600;
    color: black;
  }
  button {
    color: var(--primary-container);
    padding: 5px;
    border-radius: 20px;
  }
`;
const Conntention = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  width: 80%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p {
      font-weight: 500;
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    p:first-child {
      weight: 600;
      font-size: 1.15rem;
      color: black;
    }
  }
`;
const ProfileOptions = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  button {
    display: flex;
    jsutify-content: cneter;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid var(--primary-fixed-dim);
    background-color: white;
    color: var(--primary);
    curosr: pointer;
    font-weight: 600;
    font-size: 1rem;
  }
`;
const Posts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  .categories {
    display: flex;
    align-items: cneter;
    justify-content: space-around;
    button {
      width: 100%;
      background: none;
      padding: 5px 0;
      border-bottom: 3px solid transparent;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid var(--primary);
    }
  }
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 3px;
  }
`;
const Post = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
`;
