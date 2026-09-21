import styled from "styled-components";
import { X, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

export default function ExploreAccount({ userData, onClick }) {
  const [user, setUser] = useState(userData);
  function userHandler(id) {
    if (id === "increase") {
      setUser((prev) => {
        return {
          ...prev,
          likes: !prev.isLiked ? prev.likes - 1 : prev.likes++,
          isLiked: !prev.isLiked,
        };
      });
    }
  }
  return (
    <Container>
      <Wrapper>
        <Header>
          <Info>
            <AvatatRing>
              <Img src={user.imgUrl} alt={user.caption} loading="lazy" />
            </AvatatRing>
            <Name>{(user.name = "Alex Rivera")}</Name>
          </Info>
          <CloseButton onClick={() => onClick(null)}>
            <X color="#626567" size={25} />
          </CloseButton>
        </Header>
        <Content>
          <ImageContainer>
            <Image src={user.imgUrl} alt={user.caption} />
          </ImageContainer>
          <PostDetails>
            <ReactionIcons>
              <LifeSideIconsWrapper>
                <IconButton onClick={() => userHandler("increase")}>
                  <Heart
                    fill={!user.isLiked ? "#8455ef" : "white"}
                    color={!user.isLiked ? "#8455ef" : "black"}
                  />
                </IconButton>
                <IconButton>
                  <MessageCircle />
                </IconButton>
                <IconButton>
                  <Share2 />
                </IconButton>
              </LifeSideIconsWrapper>
              <RightSideIconsWrapper>
                <IconButton>
                  <Bookmark />
                </IconButton>
              </RightSideIconsWrapper>
            </ReactionIcons>
            <LikesCountWrapper>
              <span>{user.likes}</span>
              <span>likes</span>
            </LikesCountWrapper>
          </PostDetails>
          <Caption>
            <span>{user.name}</span>
            <span>{user.caption}</span>
          </Caption>
          <Timestamp>{user.timestamp}</Timestamp>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1003;
  background-color: rgb(0, 0, 0, 0.89);
  padding: 2.3rem 10px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 1rem 0;
  margin-bottom: 4rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const AvatatRing = styled.div`
  width: 45px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Name = styled.h3`
  color: #0f172a;
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background: none;
  &:hover {
    opacity: 0.5;
    background: revert;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const PostDetails = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ReactionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const LifeSideIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const RightSideIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikesCountWrapper = styled.div`
  display: flex;
  gap: 10px;
  span:first-child {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;
const IconButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  transition: transform 0.3s ease;
  &:active svg {
    transform: scale(1.2);
  }
`;
const Caption = styled.div`
  padding: 0 1rem;
  span:first-child {
    margin-right: 5px;
    font-weight: 600;
    font-size: 1.13rem;
  }
`;
const Timestamp = styled.p`
  padding: 0 1rem;
  color: var(--text-muted);
`;
