import styled from "styled-components";
import { X, Camera } from "lucide-react";
import { profile } from "../data/profile";
import { useState } from "react";

export default function EditProfile({ handelClick }) {
  const [formValues, setFormValues] = useState(profile);
  function formStateHandler(e) {
    const { id, value } = e;
    setFormValues((prev) => {
      return { ...prev, [id]: value };
    });
  }
  function onSubmitHandelClick(e) {
    e.preventDefault();
  }
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
          <Form onSubmit={onSubmitHandelClick}>
            <InputLabels htmlFor="fullName"> FULL NAME</InputLabels>
            <FullName
              type="text"
              id="fullName"
              placeholder={formValues.name}
              value={formValues.name}
              onChange={(e) =>
                formStateHandler({ id: "name", value: e.target.value })
              }
            />
            <InputLabels htmlFor="username">USERNAME HANDLE</InputLabels>
            <Username
              type="text"
              id="username"
              placeholder={profile.formValues}
              value={formValues.username}
              onChange={(e) =>
                formStateHandler({ id: "username", value: e.target.value })
              }
            />
            <InputLabels htmlFor="bio"> BIO </InputLabels>
            <Bio
              value={formValues.bio}
              onChange={(e) =>
                formStateHandler({ id: "bio", value: e.target.value })
              }
            ></Bio>
            <ButtonsContainer>
              <Button type="button"> Cancel</Button>
              <Button type="submit">Save</Button>
            </ButtonsContainer>
          </Form>
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
const Form = styled.form``;
const FullName = styled.input``;
const Username = styled.input``;
const InputLabels = styled.label``;
const Bio = styled.textarea``;
const ButtonsContainer = styled.div``;
const Button = styled.button``;
