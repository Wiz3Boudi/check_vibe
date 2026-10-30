import { MessageCircle, X } from "lucide-react";
import styled from "styled-components";
import ViewProfile from "./ViewProfile";
import { useState } from "react";
import CommentsBody from "./CommentsBody";
import CommentsFooter from "./CommentFooter";

export default function CommentsModal({ onClose, data, dispatch }) {
  const { commentsCount, caption, avatarUrl, username } = data;
  const [view, setView] = useState(false);
  const [isExpanded, setExpanded] = useState(true);

  function toggle() {
    setView((prev) => !prev);
    onClose();
  }
  return (
    <Container>
      <Wrapper>
        <Header>
          <LeftSide>
            <MessageCircle color="#6b38d4" />
            <CommentsCount>{`Comments (${commentsCount})`}</CommentsCount>
          </LeftSide>
          <Close onClick={onClose}>
            <X />
          </Close>
        </Header>
        <CommentsWrapper>
          <HeaderWrapper>
            <AvatarRing>
              <AvatarImage
                onClick={toggle}
                src={avatarUrl}
                alt={avatarUrl}
                loading="lazy"
              />
            </AvatarRing>
            <Caption>
              <Username>{username}</Username>
              <Text
                $isExpanded={isExpanded}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {caption}
              </Text>
              <TimeStamp> RECENT REEL</TimeStamp>
            </Caption>
          </HeaderWrapper>
        </CommentsWrapper>
        {data.comments?.length > 0 ? (
          <CommentsBody
            comments={data.comments}
            postId={data.id}
            dispatch={dispatch}
          />
        ) : (
          <Message>
            <h3>No comments yet.</h3>
            <p>Start the conversation with your vibe!</p>
          </Message>
        )}
        {view && <ViewProfile data={data} />}
        <CommentsFooter
          username={data.comments[0]?.username}
          URL={data.comments[0]?.avatarUrl}
        />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  padding-top: 35px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1003;
  @media (min-width: 768px) {
    inset: 0;
    padding-top: 0;
    border-radius: 0;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: 95%;
  border-radius: 20px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 40%;
    max-height: 580px;
    margin: auto;
    border-radius: 20px;
    scrollbar-width: none;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;
const CommentsCount = styled.h3``;
const LeftSide = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const Close = styled.button`
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const CommentsWrapper = styled.div``;
const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 5px;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f8fafc;
`;
const AvatarRing = styled.div`
  width: 40px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
const Caption = styled.div``;
const Username = styled.h4``;
const Text = styled.div`
  color: var(--text-secondary-color);
  cursor: pointer;
  ${(props) =>
    props?.$isExpanded &&
    ` 
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;`}
`;
const TimeStamp = styled.span`
  color: var(--text-muted);
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  h3 {
    color: var(--text-secondary-color);
  }
  p {
    color: var(--text-muted);
  }
`;
