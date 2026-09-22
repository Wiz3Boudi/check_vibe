import { useState } from "react";
import styled from "styled-components";
import { vibeTags, profileGridPhotos } from "../data/Search";
import { Heart, Search } from "lucide-react";
import ExploreAccount from "../componants/ExploreAccount";
import { useLockBodyScroll } from "../uitilies/useLockBodyScroll";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  function viewAccountToggle(id) {
    setUserId(id);
    setOpen((prev) => !prev);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
  }
  const userData = profileGridPhotos.find((x) => x.id === userId);
  useLockBodyScroll(isOpen);

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Explore vibes Creativity, Sports..."
        />
        {!searchTerm.trim() && (
          <button>
            <Search color="#8f8d92" />
          </button>
        )}
      </Form>
      <HashtagesContainer>
        {vibeTags.map((item, index) => {
          return (
            <Button
              key={item}
              className={index === activeTag ? "activeTag" : ""}
              onClick={() => setActiveTag(index)}
            >
              {item}
            </Button>
          );
        })}
      </HashtagesContainer>
      <Content>
        {profileGridPhotos.map((item, index) => {
          const isLarge = index === 1 || index === 7;
          return (
            <Card
              key={item.id}
              className={isLarge ? "large" : ""}
              onClick={() => viewAccountToggle(item.id)}
            >
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
      {isOpen && (
        <ExploreAccount onClose={viewAccountToggle} userData={userData} />
      )}
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
  margin-top: 10px;
  position: relative;
  width: 100%;
  button {
    position: absolute;
    inset: 0;
    left: 5px;
    width: fit-content;
    background: none;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  padding-left: 30px;
  font-size: 1.02rem;
  outline: none;
  border: 1px solid var(--outline-variant);
  color: var(--text-secondary-color);
  background-color: #fffbff;
  &:focus {
    border-color: var(--primary);
    background-color: white;
  }
`;
const HashtagesContainer = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scrollbar-width: none;
  margin: 10px 0;
  .activeTag {
    color: var(--primary);
  }
`;
const Button = styled.button`
  border: 1px solid var(--outline-variant);
  padding: 8px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f1f1e3;
  }
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
    justify-content: center;
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
