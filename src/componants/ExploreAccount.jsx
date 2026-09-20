import styled from "styled-components";
import { X } from "lucide-react";

export default function ExploreAccount({ user, onClick }) {
  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Header>
          <Info>
            <AvatatRing>
              <Img src={user.imgUrl} alt={user.caption} loading="lazy" />
            </AvatatRing>
            <Name>{user.name}</Name>
          </Info>
          <CloseButton onClick={() => onClick(null)}>
            <X />
          </CloseButton>
        </Header>
        <Content></Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1003;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 1rem 5px;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  height: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const AvatatRing = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  padding: 2px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Name = styled.h5``;
const CloseButton = styled.button``;
const Content = styled.div``;
const Image = styled.img``;
