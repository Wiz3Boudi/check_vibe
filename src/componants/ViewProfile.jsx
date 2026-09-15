import styled from "styled-components";
import { Share, X, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Icons } from "../data/profile";
import DisplayImage from "./DisplayImage";

export default function ViewProfile({ data, showProfileToggle, showProfile }) {
  const [activeCategroy, setActiveCategrory] = useState("grid");
  const [isExpanded, setIsExpanded] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const converted = data.username
    .split("")
    .map((item, index) => {
      return index === 0 ? item.toUpperCase() : item;
    })
    .join("");
  function displayImageHandleClick() {
    console.log("hello");
    setDisplayImage((prev) => !prev);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    document.body.style.overflow = showProfile ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showProfile]);

  return (
    <>
      {isLoading ? (
        <Loading>
          <h3>Loading...</h3>
        </Loading>
      ) : (
        <Container>
          <Wrapper>
            <Header>
              <Close
                onClick={() => showProfileToggle(false)}
                aria-label="close"
              >
                <X />
              </Close>
              <Avatar>
                <AvatarImg
                  src={data.avatarUrl}
                  alt={data.avatarUrl}
                  onClick={displayImageHandleClick}
                />
                {displayImage && (
                  <DisplayImage
                    src={data.avatarUrl}
                    displayImageHandleClick={displayImageHandleClick}
                  />
                )}
                <Name>{converted}</Name>
                <Bio
                  onClick={() => setIsExpanded((prev) => !prev)}
                  $isExpanded={isExpanded}
                >
                  {data.bio}
                </Bio>
                <Username> {`@${data.username}`} </Username>
              </Avatar>
            </Header>
            <ProfileConnection>
              {data.connectingInfo.map((p) => {
                const count = p.count.toLocaleString();
                return (
                  <Info key={p.id}>
                    <h4> {count} </h4>
                    <p> {p.text} </p>
                  </Info>
                );
              })}
            </ProfileConnection>
            <Section>
              <button aria-label="follow">
                {data.isFollowing ? "Following" : "Follow"}
              </button>
              <button aria-label="share">
                <Share size={18} /> Share
              </button>
            </Section>
            <PostsContainer>
              <PostsBar>
                {Icons.map(({ id, icon }) => {
                  const Icon = icon;
                  return (
                    <Category
                      key={id}
                      onClick={() => setActiveCategrory(id)}
                      className={id === activeCategroy ? "active" : ""}
                    >
                      <Icon />
                    </Category>
                  );
                })}
              </PostsBar>
              <hr />
              <PostsBody>
                {data.images.map((img, index) => {
                  const likesCount = new Intl.NumberFormat("en", {
                    notation: "compact",
                    compactDisplay: "short",
                    maximumFractionDigits: 1,
                  })
                    .format(data.likesCount)
                    .toLocaleLowerCase();
                  return (
                    <Post key={img + index}>
                      <HoverlyConcainer>
                        <button>
                          <Heart size={16} fill="white" /> {likesCount}
                        </button>
                      </HoverlyConcainer>
                      <PostImage src={img} alt={img} />
                    </Post>
                  );
                })}
              </PostsBody>
            </PostsContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1001;
  background-color: rgb(0, 0, 0, 0.4);
  padding: 5px;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    max-width: 450px;
    right: 0;
    background-color: white;
  }
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1003;
  @media (min-width: 768px) {
    max-width: 450px;
    right: 0;
    background-color: white;
  }
`;
const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 100vh;
  overflow: auto;
  scrollbar-width: none;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Close = styled.button`
  display: flex;
  width: fit-content;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  background: none;
  &:hover {
    background: revert;
  }
`;
const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const AvatarImg = styled.img`
  width: 130px;
  aspect-ratio: 1/1;
  object-fit: cocer;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--primary);
`;
const Name = styled.h3``;
const Bio = styled.p`
  text-align: center;
  margin: 0 1rem;
  ${(props) =>
    props.$isExpanded &&
    `
    transition: all 1m ease-in-out;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    `}
`;
const Username = styled.button`
  padding: 7px;
  border-radius: 20px;
  color: var(--primary);
`;
const ProfileConnection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 0.9rem;
    color: var(--text-secondary-color);
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    flex: 0.45;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    gap: 5px;
    font-size: 1.1rem;
    border: 1px solid var(--primary);
    border-radius: 20px;
    color: var(--primary);
    background-color: transparent;
    cursor: pointer;
  }
  button:first-child {
    transition:
      background-color 1s ease-in-out,
      color 1s ease-in-out;
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
`;
const PostsContainer = styled.div``;
const PostsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
  }
`;
const Category = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
`;
const PostsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
const HoverlyConcainer = styled.div`
  position: absolute;
  z-index: 1;
  aspect-ratio: 1 / 1;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    background: none;
    font-size: 0.9rem;
  }
`;

const Post = styled.div`
  max-width: 300px;
  max-height: 300px; /* Added missing colon */
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover ${HoverlyConcainer} {
    opacity: 1;
  }
`;

const PostImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  ${Post}:hover & {
    transform: scale(1.08);
  }
`;
