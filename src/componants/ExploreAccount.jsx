import styled from "styled-components";
import { X, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

export default function ExploreAccount({ userData, onClose }) {
  const [post, setPost] = useState(userData);

  const handleToggleLike = () => {
    setPost((prev) => ({
      ...prev,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
      isLiked: !prev.isLiked,
    }));
  };

  const handleToggleSave = () => {
    setPost((prev) => ({ ...prev, isSaved: !prev.isSaved }));
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Info>
            <AvatarRing>
              <AvatarImg src={post.avatarUrl} alt={post.name} loading="lazy" />
            </AvatarRing>
            <Name>{post.name}</Name>
          </Info>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <X color="#626567" size={24} />
          </CloseButton>
        </Header>

        <Content>
          <ImageContainer>
            <PostImage src={post.imgUrl} alt={post.caption} />
          </ImageContainer>

          <PostDetails>
            <ReactionIcons>
              <LeftSideIconsWrapper>
                <IconButton onClick={handleToggleLike} aria-label="Like post">
                  <Heart
                    fill={post.isLiked ? "#8455ef" : "none"}
                    color={post.isLiked ? "#8455ef" : "#000000"}
                  />
                </IconButton>
                <IconButton aria-label="Comment">
                  <MessageCircle />
                </IconButton>
                <IconButton aria-label="Share post">
                  <Share2 />
                </IconButton>
              </LeftSideIconsWrapper>

              <RightSideIconsWrapper className="bookmark">
                <IconButton onClick={handleToggleSave} aria-label="Save post">
                  <Bookmark
                    fill={post.isSaved ? "#000000" : "none"}
                    color={post.isSaved ? "#000000" : "#000000"}
                  />
                </IconButton>
                <p> {post.isSaved ? "Saved" : "Save"}</p>
              </RightSideIconsWrapper>
            </ReactionIcons>

            <LikesCountWrapper>
              <span>{post.likes}</span>
              <span>likes</span>
            </LikesCountWrapper>
          </PostDetails>

          <Caption>
            <span>{post.name}</span>
            <span>{post.caption}</span>
          </Caption>
          <Timestamp>{post.timestamp}</Timestamp>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1003;
  background-color: rgba(0, 0, 0, 0.89);
  padding: 2.3rem 10px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
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

const AvatarRing = styled.div`
  width: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.h3`
  color: #0f172a;
  margin: 0;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const PostImage = styled.img`
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
  .bookmark {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSideIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightSideIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LikesCountWrapper = styled.div`
  display: flex;
  gap: 6px;

  span:first-child {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(1.15);
  }
`;

const Caption = styled.div`
  padding: 0 1rem;

  span:first-child {
    margin-right: 6px;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Timestamp = styled.p`
  padding: 0 1rem;
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
`;
