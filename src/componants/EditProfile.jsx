import styled from "styled-components";
import { X, Camera } from "lucide-react";
import { profile } from "../data/profile";

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
          <Avatar>
            <AvatarSection>
              <Image src={profile.avatarURL} alt="avatar" />
              <Label htmlFor="upload">
                <Camera size={30} />
              </Label>
              <HiddenInput type="file" id="upload" />
            </AvatarSection>
          </Avatar>
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
const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AvatarSection = styled.div`
  background-color: var(--primary);
  width: fit-content;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 3px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  svg {
    color: white;
  }
`;
const HiddenInput = styled.input`
  display: none;
`;
