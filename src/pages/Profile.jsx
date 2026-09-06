import styled from "styled-components";
import { Icons } from "../data/profile";
import { Share, Pen, Plus } from "lucide-react";
import { useEffect, useState, useContext, useMemo } from "react";
import Avatar from "../componants/Avatar";
import EditProfile from "../componants/EditProfile";
import { ProfileContext } from "../Contexts/profileContext";

export default function Profile() {
  const [category, setCategory] = useState("grid");
  const { info, userHandleClick, isOpen, handleClose } =
    useContext(ProfileContext);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const displayedImages = useMemo(() => {
    if (!info?.images) return [];
    switch (category) {
      case "film":
        return info.images.slice(4, -1);
      case "bookmark":
        return info.images.slice(1, 3);
      case "grid":
      default:
        return info.images;
    }
  }, [category, info?.images]);

  return (
    <Container>
      <AvatarSection>
        <Avatar src={info?.avatarURL} alt={info?.name}>
          <AddButton type="button">
            <Plus size={16} />
          </AddButton>
        </Avatar>
      </AvatarSection>

      <UserInfo>
        <Name>{info?.name}</Name>
        <UsernameHandle type="button">@{info?.username}</UsernameHandle>
        <Bio>{info?.bio}</Bio>
      </UserInfo>

      <Connections>
        {info?.connectingInfo?.map((item) => (
          <StatBox key={item.id}>
            <StatCount>{item.count.toLocaleString()}</StatCount>
            <StatLabel>{item.text}</StatLabel>
          </StatBox>
        ))}
      </Connections>

      <ProfileOptions>
        <OptionButton type="button" onClick={handleClose}>
          <Pen size={18} /> <span>Edit Profile</span>
        </OptionButton>
        <OptionButton type="button">
          <Share size={18} /> <span>Share Profile</span>
        </OptionButton>
      </ProfileOptions>

      <PostsSection>
        <CategoryTabs>
          {Icons?.map((Item) => (
            <TabButton
              key={Item.id}
              $active={Item.id === category}
              onClick={() => setCategory(Item.id)}
            >
              <Item.icon />
            </TabButton>
          ))}
        </CategoryTabs>

        <ImageGrid>
          {displayedImages.map((img, index) => (
            <PostCard key={`${img}-${index}`}>
              <img src={img} alt="User post content" />
            </PostCard>
          ))}
        </ImageGrid>
      </PostsSection>

      {isOpen && (
        <EditProfile
          handleClose={handleClose}
          userHandleClick={userHandleClick}
          info={info}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    background-color: white;
    padding-top: 1rem;
  }
`;

const AvatarSection = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary, #8a2be2);
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111111;
  margin: 0;
`;

const UsernameHandle = styled.button`
  background: none;
  border: none;
  color: var(--primary, #8a2be2);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
`;

const Bio = styled.p`
  font-size: 0.9rem;
  color: #555555;
  margin: 4px 0 0;
  max-width: 90%;
`;

const Connections = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const StatCount = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111111;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: #777777;
  font-weight: 500;
`;

const ProfileOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 90%;
`;

const OptionButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--border-color, #e0e0e0);
  background-color: white;
  color: var(--primary, #8a2be2);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  color: ${(props) => (props.$active ? "var(--primary, #8a2be2)" : "#888888")};
  border-bottom: 2px solid
    ${(props) => (props.$active ? "var(--primary, #8a2be2)" : "transparent")};
  transition: all 0.2s ease;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`;

const PostCard = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
