import styled from "styled-components";
import { discoverVibesData } from "../data/newFollowSuggestion";
import { Users } from "lucide-react";
import { useState } from "react";

export default function NewFollowing() {
  const [data, setData] = useState(discoverVibesData);

  const handleToggleFollow = (id) => {
    setData((prev) => ({
      ...prev,
      creators: prev.creators.map((creator) =>
        creator.id === id
          ? { ...creator, isFollowing: !creator.isFollowing }
          : creator,
      ),
    }));
  };

  return (
    <Container>
      <Header>
        <h3>{data?.title}</h3>
        {data?.subtitle && <p>{data.subtitle}</p>}
      </Header>

      <CardList>
        {data?.creators?.map((creator) => (
          <Card key={creator.id}>
            <CreatorMeta>
              <Avatar src={creator.avatarUrl} alt={creator.name} />
              <CreatorInfo>
                <h4>{creator.name}</h4>
                <Username>@{creator.username}</Username>
                <Mutuals>
                  <Users size={16} />
                  <span>{creator.mutualFollowsText}</span>
                </Mutuals>
              </CreatorInfo>
            </CreatorMeta>

            <FollowButton
              type="button"
              $isFollowing={creator.isFollowing}
              onClick={() => handleToggleFollow(creator.id)}
            >
              {creator.isFollowing ? "Following" : "Follow"}
            </FollowButton>
          </Card>
        ))}
      </CardList>
    </Container>
  );
}

/* Styled Components */

const Container = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: var(--text-muted, #666666);
    font-size: 0.875rem;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

const Card = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid var(--secondary-fixed-dim, #e2e8f0);
  border-radius: 12px;
  padding: 0.75rem 1rem;
`;

const CreatorMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h4 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

const Username = styled.span`
  font-size: 0.8rem;
  color: var(--text-muted, #71717a);
`;

const Mutuals = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-muted, #71717a);
`;

const FollowButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid var(--primary, #000000);

  background-color: ${(props) =>
    props.$isFollowing ? "transparent" : "var(--primary, #000000)"};
  color: ${(props) =>
    props.$isFollowing ? "var(--primary, #000000)" : "#ffffff"};

  &:hover {
    opacity: 0.9;
  }
`;
