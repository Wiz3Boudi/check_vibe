import styled from "styled-components";
import { Share, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Icons } from "../data/profile";

export default function ViewProfile({ data, showProfileToggle, showProfile }) {
  const [activeCategroy, setActiveCategrory] = useState("gird");

  useEffect(() => {
    document.body.style.overflow = showProfile ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showProfile]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <Close onClick={() => showProfileToggle(false)} aria-label="close">
            <X />
          </Close>
          <Avatar>
            <AvatarImg src={data.avatarUrl} alt={data.avatarUrl} />
            <Name>{data.username}</Name>
            <Bio> {data.bio} </Bio>
            <Username> {`@${data.username}`} </Username>
          </Avatar>
        </Header>
        <ProfileConnection>
          {data.connectingInfo.map((p) => (
            <Info key={p.id}>
              <h4> {p.count} </h4>
              <p> {p.text} </p>
            </Info>
          ))}
        </ProfileConnection>
        <Section>
          <button aria-label="follow">
            {data.isFollowing ? "Following" : "Follow"}
          </button>
          <button aria-label="share">
            <Share /> Share
          </button>
        </Section>
        <PostsContainer>
          <PostsBar>
            {Icons.map(({ id, icon }) => {
              const Icon = icon;
              return (
                <Category
                  key={id}
                  onClick={() => setActiveCategrory(id)}
                  className={id === activeCategroy ? "active" : ""}
                >
                  <Icon />
                </Category>
              );
            })}
          </PostsBar>
        </PostsContainer>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
`;
const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Close = styled.button`
  display: flex;
  width: fit-content;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  background: none;
  &:hover {
    background: revert;
  }
`;
const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const AvatarImg = styled.img`
  width: 150px;
  aspect-ratio: 1/1;
  object-fit: cocer;
  border-radius: 50%;
  curosr: pointer;
`;
const Name = styled.h3``;
const Bio = styled.p``;
const Username = styled.h4``;
const ProfileConnection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Info = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: space-around;
`;
const Section = styled.div``;
const PostsContainer = styled.div``;
const PostsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    border-bottom: 3px solid var(--primary);
  }
`;
const Category = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 5px 0;
  border-bottom: 3px solid transparent;
  svg {
    cursor: pointer;
  }
`;
const Posts = styled.div``;
const Post = styled.div``;
