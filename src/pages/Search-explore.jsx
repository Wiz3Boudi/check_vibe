import { useState } from "react";
import styled from "styled-components";
import { vibeTags, profileGridPhotos } from "../data/Search";
import { Heart } from "lucide-react";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Explore vibes Creativity, Sports..."
        />
      </Form>
      <HashtagesContainer>
        {vibeTags.map((item) => (
          <Button key={item}> {item} </Button>
        ))}
      </HashtagesContainer>
      <Content>
        {profileGridPhotos.map((item, index) => {
          const isLarge = index === 1 || index === 7;
          return (
            <Card key={item.id} className={isLarge ? "large" : ""}>
              <OverlayWrapper>
                <button aria-label="likes count">
                  <Heart size={16} fill="white" /> <span>{item.likes}</span>
                </button>
              </OverlayWrapper>
              <Image src={item.imgUrl} alt={item.caption} loading="lazy" />
            </Card>
          );
        })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Form = styled.form`
  margin-top: 1rem;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 1.02rem;
  outline: none;
  border: 1px solid var(--outline-variant);
  &:focus {
    border-color: var(--primary);
  }
`;
const HashtagesContainer = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scrollbar-width: none;
  margin: 10px 0;
`;
const Button = styled.button`
  border: 1px solid var(--outline-variant);
  padding: 8px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
`;
const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 5px;
  @media (min-width: 768px) {
    grid-auto-rows: 100px;
  }
  .large {
    grid-column: span 2;
    grid-row: span 2;
  }
`;
const OverlayWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.4);
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  button {
    background: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: cneter;
    gap: 3px;
    span {
      font-weight: 600;
    }
  }
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover ${OverlayWrapper} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  ${Card}:hover & {
    transform: scale(1.08);
  }
`;
