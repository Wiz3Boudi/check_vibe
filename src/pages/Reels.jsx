import styled from "styled-components";
import { initialReels } from "../data/reels";
import {
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  Music,
  ChevronUp,
  ChevronDown,
  Check,
} from "lucide-react";
import { useReducer, useState } from "react";
import { reels } from "../reducer/reels";
import { useLockBodyScroll } from "../uitilies/useLockBodyScroll";
import { postDigitsFormater } from "../uitilies/postDigitsFormater";
import CaptionModal from "../componants/CaptionModal";
import ReelsComments from "../componants/ReelsComments";

export default function Reels() {
  const [state, dispatch] = useReducer(reels, initialReels);
  const [isMute, setMute] = useState(false);
  const [isExpanded, setExpand] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCommentModalOpen, setCommentModal] = useState(false);

  const handleClose = () => {
    setExpand((prev) => !prev);
  };
  function handleCommentsModal() {
    setCommentModal((prev) => !prev);
  }
  const reelsSize = state.length - 1;
  const { likes, comments, shares } = postDigitsFormater(
    state[currentIndex].likesCount,
    state[currentIndex].commentsCount,
    state[currentIndex].sharesCount,
  );
  const handleCurrentIndex = (type) => {
    if (isExpanded) {
      setExpand(false);
    }
    if (type.trim() === "scrollDown") {
      return setCurrentIndex((prev) => {
        return prev >= reelsSize ? (prev = 0) : prev + 1;
      });
    }
    if (type.trim() === "scrollUp") {
      return setCurrentIndex((prev) => {
        return prev > reelsSize ? (prev = reelsSize) : prev - 1;
      });
    }
  };

  useLockBodyScroll(true);

  return (
    <Container>
      <CaptionModal
        isExpanded={isExpanded}
        handleClose={handleClose}
        text={state[currentIndex].caption}
      />
      <ReelsComments
        comments={state[currentIndex].commentsCount}
        isOpen={isCommentModalOpen}
        onClose={handleCommentsModal}
        caption={state[currentIndex].caption}
        avatarUrl={state[currentIndex].avatarUrl}
        username={state[currentIndex].username}
      />
      <ReelWrapper>
        <Image src={state[currentIndex].videoBgUrl} />
        <ReactionWrapper>
          <Button onClick={() => setMute((prev) => !prev)}>
            {isMute ? <Volume2 /> : <VolumeX />}
          </Button>
          <ButtonWrapper>
            <Button
              onClick={() => handleCurrentIndex("scrollUp")}
              disabled={currentIndex <= 0}
            >
              <ChevronUp />
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => handleCurrentIndex("scrollDown")}
              disabled={currentIndex >= reelsSize}
            >
              <ChevronDown />
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onClick={() =>
                dispatch({
                  type: "like",
                  payload: {
                    id: state[currentIndex].id,
                  },
                })
              }
              $color={state[currentIndex].isLiked}
            >
              <Heart
                fill={state[currentIndex].isLiked ? "#6b38d4" : "transparent"}
              />
            </Button>
            <Span> {likes} </Span>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button onClick={handleCommentsModal}>
              <MessageCircle />
            </Button>
            <Span> {comments} </Span>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <Share2 />
            </Button>
            <Span> {shares} </Span>
          </ButtonWrapper>
        </ReactionWrapper>
        <Section>
          <Header>
            <Username> {`@${state[currentIndex].username}`} </Username>
            <Button
              $color="white"
              $backgroundColor={
                state[currentIndex].isFollowing
                  ? "#8455ef"
                  : "rgb(0, 0, 0, 0.7)"
              }
              $borderRadius={20}
              $paddingY={10}
              $paddingX={20}
              $isFollowing={state[currentIndex].isFollowing}
              $flexDirection={"row"}
              $paddingTop={5}
              $gap={20}
              onClick={() =>
                dispatch({
                  type: "follow",
                  payload: {
                    id: state[currentIndex].id,
                  },
                })
              }
            >
              {state[currentIndex].isFollowing && (
                <Check color="white" size={20} />
              )}
              {state[currentIndex].isFollowing ? "Following" : "Follow"}
            </Button>
          </Header>
          <Body>
            <RightSide>
              <Caption onClick={handleClose}>
                {state[currentIndex].caption}
              </Caption>
              <Audio>
                <Music />
                <span> {state[currentIndex].audioTrack} </span>
              </Audio>
            </RightSide>
            <Avatar>
              <AvatarImg
                src={state[currentIndex].avatarUrl}
                alt={state[currentIndex].caption}
              />
            </Avatar>
          </Body>
        </Section>
      </ReelWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ReelWrapper = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 79vh;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 100vh;
  }
`;
const ReactionWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : "column"};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-top: ${({ paddingY }) => (paddingY ? paddingY : "10px")};
  padding-bottom: ${({ paddingY }) => (paddingY ? paddingY : "10px")};
  padding-left: ${({ paddingX }) => (paddingX ? paddingX : "10px")};
  padding-right: ${({ paddingX }) => (paddingX ? paddingX : "10px")};

  gap: ${(props) => (props.$gap ? props.$pap + "px" : "0px")};
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius + "px" : "50px"};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "rgb(0, 0, 0, 0.3)"};
  color: ${(props) => (props ? props.$color : "")};
  font-weight: 700;
  svg {
    color: ${(props) => (props?.$color ? "var(--primary)" : "white")};
  }
  &:disabled {
    cursor: auto;
    svg {
      opacity: 0.2;
    }
  }
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
`;
const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;
const Header = styled.div`
  display: flex;
  jsutify-content: center;
  align-items: center;
  gap: 10px;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;
const Username = styled.h4`
  color: #ffffff;
`;
const Caption = styled.p`
  color: #ffffff;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
`;
const Audio = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  svg {
    color: brown;
  }
`;
const Avatar = styled.div`
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
