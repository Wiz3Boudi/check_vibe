import styled from "styled-components";
import { X, Share } from "lucide-react";
import { useEffect } from "react";

export default function ViewProfile({ data, showProfileToggle, showProfile }) {
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
            <ProfileConnection>
              {data.connectingInfo.map((p) => (
                <Info key={p.id}>
                  <h4> {p.count} </h4>
                  <p> {p.text} </p>
                </Info>
              ))}
            </ProfileConnection>
            <Section>
              <button aria-label="follow"> Follow </button>
              <button aria-label="share">
                {" "}
                <Share /> Share{" "}
              </button>
            </Section>
          </Avatar>
        </Header>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
`;
const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 5px;
`;
const Close = styled.button``;
const Header = styled.div``;
const Avatar = styled.div``;
const AvatarImg = styled.img`
  width: 100px;
  aspect-ratio: 1/1;
  object-fit: cocer;
  border-radius: 50%;
`;
const Name = styled.h3``;
const Bio = styled.p``;
const Username = styled.h4``;
const ProfileConnection = styled.div``;
const Info = styled.div``;
const Section = styled.div``;
