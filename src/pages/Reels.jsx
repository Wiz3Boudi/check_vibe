import styled from "styled-components";
import { initialReels } from "../data/reels";
import {
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  Music,
} from "lucide-react";
import { useReducer, useState } from "react";
import { reels } from "../reducer/reels";

export default function Reels() {
  const [state, dispatch] = useReducer(reels, initialReels);
  const [isMute, setMute] = useState(false);

  return (
    <Container>
      {state.map((item) => {
        return (
          <ReelWrapper key={item.id}>
            <Image src={item.videoBgUrl} />
            <ReactionWrapper>
              <Button onClick={() => setMute((prev) => !prev)}>
                {isMute ? <Volume2 /> : <VolumeX />}
              </Button>
              <ButtonContainer>
                <ButtonWrapper>
                  <Button>
                    <Heart />
                  </Button>
                  <Span> {item.likesCount} </Span>
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button>
                    <MessageCircle />
                  </Button>
                  <Span> {item.commentsCount} </Span>
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button>
                    <Share2 />
                  </Button>
                  <Span> {item.sharesCount} </Span>
                </ButtonWrapper>
              </ButtonContainer>
            </ReactionWrapper>
            <Section>
              <Header>
                <Username> {`@${item.username}`} </Username>
                <Button $color=""> Follow </Button>
              </Header>
              <Caption>{item.caption}</Caption>
              <Audio>
                <Music />
                <span> {item.audioTrack} </span>
              </Audio>
            </Section>
          </ReelWrapper>
        );
      })}
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
  height: 80vh;
  object-fit: cover;
`;
const ReactionWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
`;
const Section = styled.section`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 10px;
  background-color: rgb(0, 0, 0, 0.2);
`;
const Header = styled.div`
  display: flex;
  jsutify-content: center;
  align-items: center;
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
