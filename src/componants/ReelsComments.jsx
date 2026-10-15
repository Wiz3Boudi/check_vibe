import { MessageCircle, X } from "lucide-react";
import styled from "styled-components";

export default function ReelsComments({ comments, onClose, isOpen, caption }) {
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
          <Caption> {caption} </Caption>
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
  padding: 30px 0;
  background-color: rgb(0, 0, 0, 0.4);
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
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
const CommentsWrapper = styled.div``;
const Caption = styled.p``;
