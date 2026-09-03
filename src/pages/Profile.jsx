import styled from "styled-components";
import { profile, Icons } from "../data/profile";
import { Share, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import Avatar from "../componants/Avatar";
import EditProfile from "../componants/EditProfile";

export default function Profile() {
  const [category, setCategory] = useState("grid");
  const [openProfileEdit, setOpenProfileEdit] = useState(false);

  function editProfileToggle() {
    setOpenProfileEdit((prev) => !prev);
  }

  useEffect(() => {
    if (openProfileEdit) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [openProfileEdit]);

  return (
    <Container>
      <Avatar />
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
        <button onClick={editProfileToggle}>
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
      {openProfileEdit && <EditProfile handelClick={editProfileToggle} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    background-color: white;
    padding-top: 1rem;
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
    cursor: pointer;
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
    row-gap: 2px;
    column-gap: 5px;
    position: relative;
  }
`;
const Post = styled.div`
  cursor: pointer;
  overflow: hidden;
  height: 150px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: transform 0.25s ease-in-out;
    &:hover {
      transform: scale(1.08);
    }
  }
`;
