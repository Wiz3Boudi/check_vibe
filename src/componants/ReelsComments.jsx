import { MessageCircle, X } from "lucide-react";
import styled from "styled-components";

export default function ReelsComments({
  comments,
  onClose,
  isOpen,
  caption,
  avatarUrl,
  username,
}) {
  return (
    <Container $isOpen={isOpen}>
      <Wrapper>
        <Header>
          <LeftSide>
            <MessageCircle color="#6b38d4" />
            <CommentsCount>{`Comments (${comments})`}</CommentsCount>
          </LeftSide>
          <Close onClick={onClose}>
            <X />
          </Close>
        </Header>
        <CommentsWrapper>
          <HeaderWrapper>
            <AvatarRing>
              <AvatarImage src={avatarUrl} alt={avatarUrl} loading="lazy" />
            </AvatarRing>
            <Caption>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.1rem",
                  marginRight: "10px",
                }}
              >
                {username}
              </span>
              {caption}
              <p style={{ color: "rgb(130, 134, 134)", marginTop: "5px" }}>
                RECENT REEL
              </p>
            </Caption>
          </HeaderWrapper>
        </CommentsWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props?.$isOpen ? "flex" : "none")};
  position: fixed;
  inset: 0;
  height: 100%;
  padding: 100px 0;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 1003;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
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
  padding: 20px;
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
const Body = styled.div``;
const Input = styled.input``;
