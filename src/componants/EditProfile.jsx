import styled from "styled-components";
import { X, Camera } from "lucide-react";
import Avatar from "../componants/Avatar";

export default function EditProfile({ handelClick }) {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Edit Profile</h1>
          <button onClick={handelClick}>
            <X />
          </button>
        </Header>
        <div className="line"></div>
        <Main>
          <Avatar Icon={Camera} />
        </Main>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 1001;
  height: 100vh;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  .line {
    width: 100%;
    height: 0.1px;
    background-color: var(--secondary-container);
    margin: 1rem 0;
  }
`;
const Header = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-between;
  h1 {
    color: var(--on-surface-variant);
  }
  button {
    border-radius: 50%;
    padding: 5px;
    background: none;
    cursor: pointer;
    &:hover {
      background: revert;
    }
  }
`;
const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  max-height: 90vh;
  height: 100%;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
`;
const Main = styled.div``;
