import { X, ImageIcon } from "lucide-react";
import { useId, useState } from "react";
import styled from "styled-components";
import { images } from "../data/createNewPost_story";

export default function CreateStory() {
  const [category, setCategory] = useState("feed");
  const [URL, setURL] = useState(null);
  const [inputValues, setInputValues] = useState({
    Url: "",
    location: "",
    caption: "",
  });

  function handleInputGroup({ id, value }) {
    // console.log(id, value);
    setInputValues((prev) => {
      return { ...prev, [id]: value };
    });
  }

  return (
    <SoryWrapper>
      <Content>
        <Header>
          <Head>
            {`Create New `}
            <span>{category === "feed" ? "Feed Post" : "Vibe Story"}</span>
          </Head>
          <Close>
            <X />
          </Close>
        </Header>
        <Categories>
          <Button
            className={category === "feed" ? "active" : ""}
            onClick={() => setCategory("feed")}
          >
            Feed Post
          </Button>
          <Button
            className={category === "story" ? "active" : ""}
            onClick={() => setCategory("story")}
          >
            24h Story
          </Button>
        </Categories>
        <Body>
          <Pragraph> Choose Photo Preset or URL</Pragraph>
          <ImageGrid>
            {images.map((img) => (
              <Image
                src={img.avatarUrl}
                key={img.id}
                alt={img.avatarUrl}
                loading="lazy"
              />
            ))}
          </ImageGrid>
          <Input
            type="text"
            placeholder="Or past any custom URL here..."
            value={inputValues.Url}
            id="Url"
            onChange={(e) =>
              handleInputGroup({
                id: e.currentTarget.id,
                value: e.target.value,
              })
            }
          />
          <LiveImageWrapper>
            <Image
              src={images[0].avatarUrl}
              alt={images[0].avatarUrl}
              loading="lazy"
            />
            <OverlayText> Live Visual</OverlayText>
          </LiveImageWrapper>
          <Label htmlFor="location"> Location </Label>
          <Input
            id="location"
            type="text"
            placeholder="Tokyo, Japan"
            value={inputValues.location}
            onChange={(e) =>
              handleInputGroup({
                id: e.currentTarget.id,
                value: e.target.value,
              })
            }
          />
          <Label htmlFor="caption"> CAPTION </Label>
          <Caption
            id="caption"
            type="text"
            placeholder="What is your vibe today? Express your mood..."
            value={inputValues.caption}
            onChange={(e) =>
              handleInputGroup({
                id: e.currentTarget.id,
                value: e.target.value,
              })
            }
          />
        </Body>
      </Content>
    </SoryWrapper>
  );
}

const SoryWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  padding: 2rem 1.3rem;
  position: fixed;
  z-index: 1004;
  inset: 0;
`;
const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px 0;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
`;
const Head = styled.h3`
  span {
    color: var(--primary);
  }
`;
const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 3px;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    border-bottom: 2px solid var(--primary);
    background-color: #f3f9fc;
    color: var(--primary);
  }
`;
const Button = styled.button`
  text-align: center;
  cursor: pointer;
  width: 50%;
  height: 60px;
  border-top: 1px solid #c4c7c9;
  border-bottom: 2px solid #c4c7c9;
  font-size: 1.02rem;
  font-weight: 600;
  background: none;
  color: #494454;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
  height: 64vh;
  overflow-y: auto;
  scrollbar-width: none;
`;
const Pragraph = styled.p`
  text-transform: uppercase;
  color: var(--text-secondary-color);
`;
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const Label = styled.label`
  text-transform: uppercase;
`;
const Input = styled.input`
  outline: none;
  min-height: 35px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: var(--text-secondary-color);
  padding: 0 10px;
  font-size: 16px;
  &:focus {
    border: 2px solid var(--primary);
  }
`;
const LiveImageWrapper = styled.div`
  position: relative;
`;
const OverlayText = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 10px;
`;
const Caption = styled.textarea`
  outline: none;
  min-height: 60px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: var(--text-secondary-color);
  padding: 0 10px;
  font-size: 16px;
  &:focus {
    border: 2px solid var(--primary);
  }
`;
const TagsWrapper = styled.div``;
const Publish = styled.button``;
