import styled from "styled-components";
import { discoverVibesData } from "../data/newFollowSugestion";
import { Users } from "lucide-react";
import { useState } from "react";

export default function NewFllowing() {
  const [creators, setCreators] = useState(discoverVibesData);

  function handelClick(id) {
    setCreators((prev) => {
      return {
        ...prev,
        creators: prev.creators.map((creator) =>
          creator.id === id
            ? { ...creator, isFollowing: !creator.isFollowing }
            : creator,
        ),
      };
    });
  }
  return (
    <Container>
      <Header>
        <h3> {creators?.title} </h3>
        <p> {creators.subtitle} </p>
      </Header>
      <Cards>
        {creators?.creators.map((creator) => (
          <Card key={creator.id}>
            <div>
              <img src={creator.avatarUrl} alt="avatar" />
              <div>
                <h4> {creator.name} </h4>
                <p> {creator.username} </p>
                <div>
                  <Users size={16} />
                  <span> {creator.mutualFollowsText} </span>
                </div>
              </div>
            </div>
            <button
              className={!creator.isFollowing ? "following" : ""}
              onClick={() => handelClick(creator.id)}
            >
              Follow
            </button>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
const Cards = styled(Container)`
  padding: 0;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border: 1px solid var(--secondary-fixed-dim);
  border-radius: 10px;
  padding: 10px;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  button {
    padding: 12px;
    border-radius: 15px;
    cursor: pointer;
  }
  .following {
    background-color: var(--primary);
    color: white;
  }
`;
const Header = styled.div``;
