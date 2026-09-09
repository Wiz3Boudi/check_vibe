import styled from "styled-components";
import { X, Camera } from "lucide-react";
import { useState } from "react";

export default function EditProfile({ handleClose, info, userHandleClick }) {
  const [userData, setUserData] = useState(info);
  const [error, setError] = useState({ name: "", username: "", bio: "" });
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
    if (error[id]) setError((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!userData.name?.trim()) newErrors.name = "Name can't be empty";
    if (!userData.username?.trim())
      newErrors.username = "Username can't be empty";
    if (!userData.bio?.trim()) newErrors.bio = "Bio can't be empty";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      userHandleClick(userData);
    }, 2000);
    // setLoading(false);
  };

  return (
    <Container>
      <Content>
        <Header>
          <h1>Edit Profile</h1>
          <button type="button" onClick={handleClose}>
            <X />
          </button>
        </Header>
        <Divider />

        <Main>
          <AvatarSection>
            <Image src={userData.avatarURL} alt="avatar" />
            <Label htmlFor="upload">
              <Camera size={26} />
            </Label>
            <HiddenInput type="file" id="upload" accept="image/*" />
          </AvatarSection>

          <Form onSubmit={handleSubmit}>
            <InputLabel htmlFor="name">FULL NAME</InputLabel>
            <Input
              type="text"
              id="name"
              value={userData.name || ""}
              onChange={handleInputChange}
            />
            {error.name && <ErrorText>{error.name}</ErrorText>}

            <InputLabel htmlFor="username">USERNAME HANDLE</InputLabel>
            <Input
              type="text"
              id="username"
              value={userData.username || ""}
              onChange={handleInputChange}
            />
            {error.username && <ErrorText>{error.username}</ErrorText>}

            <InputLabel htmlFor="bio">BIO</InputLabel>
            <Bio
              id="bio"
              value={userData.bio || ""}
              onChange={handleInputChange}
            />
            {error.bio && <ErrorText>{error.bio}</ErrorText>}

            <ButtonsContainer>
              <Button type="button" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" $primary>
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </ButtonsContainer>
          </Form>
        </Main>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`;

const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  max-height: 90vh;
  width: 100%;
  max-width: 450px;
  padding: 1.5rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.25rem;
    color: var(--on-surface-variant);
    margin: 0;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--secondary-container, #e0e0e0);
  margin: 1rem 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const AvatarSection = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--primary);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary-color, #666);
  margin-top: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid var(--input-border-color, #ccc);
  border-radius: 8px;
  font-size: 0.95rem;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: var(--primary);
  }
`;

const Bio = styled.textarea`
  width: 100%;
  min-height: 70px;
  padding: 10px 12px;
  border: 1.5px solid var(--input-border-color, #ccc);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  box-sizing: border-box;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: var(--primary);
  }
`;

const ErrorText = styled.p`
  color: #d9534f;
  font-size: 0.8rem;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid var(--primary);
  background-color: ${(props) =>
    props.$primary ? "var(--primary)" : "transparent"};
  color: ${(props) => (props.$primary ? "#ffffff" : "var(--primary)")};

  &:hover {
    opacity: 0.9;
  }
`;
