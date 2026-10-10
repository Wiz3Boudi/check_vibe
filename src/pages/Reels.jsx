import styled from "styled-components";
import { initialReels, icons } from "../data/reels";
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

export default function Reels() {
  const [state, dispatch] = useReducer(reels, initialReels);
  const [isMute, setMute] = useState(false);
  const [isExpanded, setExpand] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reelsSize = state.length - 1;
  const likes = state[currentIndex].likesCount / 1000;
  const xx = likes.toFixed(3);
  console.log(xx);

  const handleCurrentIndex = (type) => {
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
            <Button>
              <Heart />
            </Button>
            <Span> {state[currentIndex].likesCount} </Span>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <MessageCircle />
            </Button>
            <Span> {state[currentIndex].commentsCount} </Span>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <Share2 />
            </Button>
            <Span> {state[currentIndex].sharesCount} </Span>
          </ButtonWrapper>
        </ReactionWrapper>
        <Section>
          <Header>
            <Username> {`@${state[currentIndex].username}`} </Username>
            <Button $color=""> Follow </Button>
          </Header>
          <Body>
            <RightSide>
              <Caption>{state[currentIndex].caption}</Caption>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0.3);
  svg {
    color: #ffffff;
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
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
